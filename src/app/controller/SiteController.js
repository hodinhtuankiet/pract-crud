const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose')
class SiteController {
    // [GET] home 
    index(req, res, next) {
        Course.find({})
            .then(courses => {
                // courses = courses.map(courses => courses.toObject())
                res.render('home', {
                    courses: multipleMongooseToObject(courses)
                });
            })
            .catch(next);
    };

    // search 
    show(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
