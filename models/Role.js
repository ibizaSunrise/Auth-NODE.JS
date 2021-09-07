const {model, Schema} = require('mongoose')

const Role = new Schema({
   value: {type: String, uniq: true, default: 'USER'},
   
})

module.exports = model('Role', Role)//params: 1)modelName, 2)schema