const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

let refreshTokens = [];
const LoginController = {
    generateAccessToken: (user) => {
        return jwt.sign(
            {
                id: user._id,
                admin: user.admin
            },
            "10132bac075ac5e19b328b2c74204ceeb9be3d75e07ecadf69d8f5ece16f76b6",
            {
                expiresIn: "20s"
            }
        );
    },
    generateRefreshToken: (user) => {
        return jwt.sign(
            {
                id: user._id,
                admin: user.admin
            },
            "10132bac075ac5e19b328b2c74204ceeb9be3d75e07ecadf69d8f5ece16f76b6",
            {
                expiresIn: "365d"
            }
        );
    },
    loginUser: async (req, res) => {
        try {
            const user = await User.findOne({ username: req.body.username });
            if (!user) {
                return res.status(404).json("Wrong UserName !");
            }
            const validPassword = await bcrypt.compare(
                req.body.password,
                user.password
            );
            if (!validPassword) {
                return res.status(404).json("Wrong password");
            }
            const accessToken = LoginController.generateAccessToken(user);
            const refreshToken = LoginController.generateRefreshToken(user);

            refreshTokens.push(refreshToken); // Fixed

            res.cookie("refreshToken", refreshToken, {
                httpOnly: true,
                secure: false,
                path: "/",
                sameSite: "strict",
            });
            const { password, ...other } = user._doc;

            return res.status(200).json({ ...other, accessToken });
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    requestRefreshToken: async (req, res) => {
        const refreshToken = req.cookies.refreshToken;
        if (!refreshToken) {
            return res.status(401).json("You're not authenticated");
        }
        if (!refreshTokens.includes(refreshToken)) {
            return res.status(403).json("Refresh Token is not valid");
        }
        jwt.verify(
            refreshToken,
            "10132bac075ac5e19b328b2c74204ceeb9be3d75e07ecadf69d8f5ece16f76b6",
            (err, user) => {
                if (err) {
                    console.log(err);
                }
                refreshTokens = refreshTokens.filter((token) => token !== refreshToken);
                const newAccessToken = LoginController.generateAccessToken(user);
                const newRefreshToken = LoginController.generateRefreshToken(user);

                refreshTokens.push(newRefreshToken);

                res.cookie("refreshToken", newRefreshToken, {
                    httpOnly: true,
                    secure: false,
                    path: "/",
                    sameSite: "strict",
                });

                return res.status(200).json({ accessToken: newAccessToken });
            }
        );
    },
};

module.exports = LoginController;
