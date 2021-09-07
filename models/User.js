const {model, Schema} = require('mongoose')

const User = new Schema({
    username: {type: String, uniq: true, required: true},
    password: {type: String, required: true},
    roles: [{type: String, ref: 'Role'}]
})

module.exports = model('User', User)//params: 1)modelName, 2)schema