
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const Admin = new Schema(
    {
        // Coffee 
        Name: { type: String, maxLength: 255 },
        Quantity: { type: String, maxLength: 255 },
        Email: { type: String, maxLength: 255 },
        Sdt: { type: String, maxLength: 255 },
        Address: { type: String, maxLength: 600 },
        Time: { type: String, maxLength: 255 },
        Payment: { type: String, maxLength: 255 },
        // slug: { type: String, slug: "Name", unique: true },
    }, {
    timestamps: true,
});
module.exports = mongoose.model('Admin', Admin); 