const mongoose = require('mongoose')
const {Schema} = mongoose

const crudSchema = new Schema({
    name: String,
    phoneNumber:String,
    year:String,
    
})

const crudOPERATIONS= mongoose.model('crudeOP', crudSchema)
module.exports= {crudOPERATIONS}