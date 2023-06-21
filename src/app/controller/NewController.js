
class NewsController {
    // [GET] news 
    index(req, res) {
        res.render('news')
    }
    show(req, res) {
        res.send('news show')
    }
}
// export external 
module.exports = new NewsController; 