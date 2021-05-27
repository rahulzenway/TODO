var mongoose = require('mongoose')
var Schema =mongoose.Schema

var todo = new Schema({
    content:
    {
        type: String,
        required: true
    },
    createdOn: {
        type: Date,
        default: new Date()
    },
    status:Number,
    createdBy: mongoose.Schema.Types.ObjectId
})

module.exports = mongoose.model('todo',todo)
