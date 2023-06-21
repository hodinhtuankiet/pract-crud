const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose')
class MeController {
    // [GET] home 
    // search 
    storedCoffee(req, res, next) {
        Course.find({ deletedAt: null })
            .then(course => res.render('me/stored', {
                course: multipleMongooseToObject(course)
            }))
            .catch(next)
    }
}

module.exports = new MeController();
