
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const Course = new Schema(
    {
    // Coffee 
    Number: { type: String, maxLength: 255 },
    Name: { type: String, maxLength: 255 },
    Quantity: { type: String, maxLength: 255 },
    Note: { type: String, maxLength: 255 },
    // Course 
    name: { type: String, maxLength: 255 },
    description: { type: String, maxLength: 600 },
    image: { type: String, maxLength: 255 },
    videoId: { type: String, maxLength: 255 },
    slug: { type: String, slug: "Name", unique: true },
}, {
    timestamps: true,
});
module.exports = mongoose.model('Course', Course, 'courses'); 