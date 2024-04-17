require('dotenv').config()
const mongoose = require('mongoose')

const linkConection = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@serverdb.iaj4ewt.mongodb.net/miDataBase?retryWrites=true&w=majority&appName=ServerDB`

mongoose.connect(linkConection)
  .then(() => {
    console.log('conectado a la base de datos')
  }).catch(error => {
    console.log(error)
  })

const peticionEsquema = new mongoose.Schema({
  prioridad: String,
  asunto: String,
  mensaje: String
})

const PeticionModelo = mongoose.model('Peticion', peticionEsquema)

/* const nuevaPeticionEjemplo = new PeticionModelo({
  prioridad: 'normal',
  asunto: 'primer peticion desde node',
  mensaje: 'mensaje de peticion desde node'
})

nuevaPeticionEjemplo.save()
  .then(result => {
    console.log(result)
    mongoose.connection.close()
  })
  .catch(err => {
    console.log(err)
  })
*/
module.exports = PeticionModelo
