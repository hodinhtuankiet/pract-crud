const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/mongoose')
class CoffeeController {
    // [GET] home 

    // search 
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then(coffee =>
                res.render('coffee/show', { coffee: mongooseToObject(coffee) })
            )
            .catch(next);
    }
    // [GET] 
    create(req, res, next) {
        res.render('coffee/create')
    }
    // [EDIT]


    // [POST]
    store(req, res, next) {
        const formData = req.body;
        const coffee = new Course(formData)
        coffee.save()
            .then(() => res.redirect('/'))
            .catch(error => {

            });
    }

    edit(req, res, next) {
        Course.findById(req.params.id)
            .then(course => res.render('coffee/edit', {
                course: mongooseToObject(course)
            }))
            .catch(next)
        // res.send('dsadsad')
    }
    // [PUT]
    update(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/coffee'))
            .catch(next);
        // res.send(req.body)

        // res.send('dsadsad')
    }

    delete(req, res, next) {
        Course.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
        // res.send('dsadsad')
    }
}

module.exports = new CoffeeController();
