const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, ObjectId } = Schema.Types;

const publicationSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    carModel: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: false
    },
    author: {
        type: ObjectId,
        ref: "User"
    },
    comments: [{
        type: ObjectId,
        ref: "Comment"
    }],
    likes: [{
        type: ObjectId,
        ref: "User"
    }]

});

module.exports = new Model('Publication', publicationSchema);