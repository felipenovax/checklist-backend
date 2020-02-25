const restful = require('node-restful')
const mongoose = restful.mongoose

const usersSchema = new mongoose.Schema({
    name: { type: String, required: true },
    admin: { type: Boolean, default: false },
    stack: { type: String },
    email: { type: String, required: true },
    password: { type: String, required: true },
})

module.exports = restful.model('Users', usersSchema)