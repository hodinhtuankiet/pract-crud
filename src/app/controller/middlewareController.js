const jwt = require("jsonwebtoken");

const middlewareController = {
    verifyToken: (req, res, next) => {
        const token = req.headers.token;
        if (token) {
            const accessToken = token.split(" ")[1];
            jwt.verify(accessToken, "10132bac075ac5e19b328b2c74204ceeb9be3d75e07ecadf69d8f5ece16f76b6"
                , (err, user) => {
                    if (err) {
                        return res.status(404).json("Token is not valid");
                    }
                    req.user = user;
                    next();
                })
        } else {
            return res.status(401).json("You are not authenticated");
        }
    },
    // verify you are yourself or admin
    verifyTokenAndAdminAuthen: (req,res,next) => {
        middlewareController.verifyToken(req,res, ()=> {
            if(req.user.id == req.params.id || req.user.admin)
            {
                next();

            }else{
                return res.status(403).json("You aren't delete other");
            }
        })
    }
}

module.exports = middlewareController;