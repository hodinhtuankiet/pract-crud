
const newsRoutes = require('./news');

const siteRoutes = require('./Site');

const registerRoutes = require('./register');

const loginRoutes = require('./login');

const userRoutes = require('./user');

const coffeeRoutes = require('./coffee');

const meRoutes = require('./me');


function route(app) {

    app.use('/news', newsRoutes);

    app.use('/register', registerRoutes);

    app.use('/login', loginRoutes);

    app.use('/coffee', coffeeRoutes);

    app.use('/admin', coffeeRoutes);

    app.use('/me', meRoutes);

    app.use('/', siteRoutes);


    // app.use('/judge', ) 

}

module.exports = route;