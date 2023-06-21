const Admin = require('../models/admin');
const { multipleMongooseToObject } = require('../../util/mongoose')
class AdminController {
    store(req, res, next) {
        const formData = req.body;
        const Admin = new Admin(formData)
        Admin.save()
            .then(() => res.redirect('/stored2'))
            .catch(error => {

            });
    }
}

module.exports = new AdminController();
