const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/dtk_nodejs_dev', {
            dbName: 'dtk_nodejs_dev',
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('connect success');
    } catch (error) {
        console.log('connect fail');
    }
}

module.exports = { connect };
