const User = require("../models/User");
const bcrypt = require("bcrypt");

const RegisterController = {
    // [POST] registerUser 
    registerUser: async (req, res) => {
        try {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(req.body.password, salt);

            // Create a new user using the hashed password
            const newUser = await new User({
                username: req.body.username,
                email: req.body.email,
                password: hashedPassword,
            });

            // Save the new user to the database
            const savedUser = await newUser.save();
            res.status(200).json(savedUser);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    // LOGIN 
    //     loginUser: async (req, res) => {
    //         try {
    //             // find only one user , because user is unique
    //             const user = await User.findOne({ username: req.body.username });
    //             if (!user) {
    //                 res.status(404).json("Wrong UserName !");
    //             }
    //             const validPassWord = await bcrypt.compare(
    //                 req.body.password,
    //                 user.password
    //             )
    //             if (!validPassWord) {
    //                 res.status(404).json("Wrong password");
    //             }
    //             if (user && password) {
    //                 res.status(200).json(user);
    //             }
    //         } catch (error) {
    //             res.status(500).json(error);
    //         }

    //     }
};

// Export the RegisterController object
module.exports = RegisterController;
