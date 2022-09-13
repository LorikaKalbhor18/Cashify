const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://lorika:Lorika@cluster0.jnvu9wb.mongodb.net/cache' , {useNewUrlParser : true , useUnifiedTopology : true})

const connection = mongoose.connection

connection.on('error', err => console.log(err))

connection.on('connected' , () => console.log('Mongo DB Connection Successfull'))
