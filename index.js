const express = require('express')
const PeticionModelo = require('./mongo.js')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

const PORT = 3001
app.listen(PORT, () => {
  console.log('Servidor operativo')
})

require('./mongo.js')

app.get('/', (request, response) => {
  response.send('<h2>Main path de mi API C:<h2>')
})

app.get('/api', (request, response) => {
  PeticionModelo.find({})
    .then(peti => {
      response.json(peti)
    })
})

app.post('/api', (request, response) => {
  const nuevaPeticion = request.body
  const peticionParaAñadir = new PeticionModelo({
    prioridad: nuevaPeticion.prioridad,
    asunto: nuevaPeticion.asunto,
    mensaje: nuevaPeticion.mensaje
  })
  peticionParaAñadir.save()
  response.json(peticionParaAñadir)
})
