let express = require('express');
let routersAPI = require('./routes');
const app = express()

port = 3002

app.use(express.json())

// app.get -> un metodo para traer informacion. En este caso usamos el parametro (res) para mandar una respuesta
// esta en la ruta principal
app.get('/', (req, res) => {
  res.send('Hello World')
})

// app.listen -> un metodo para mandar el puerto en el que se va a ejecutar el servidor
app.listen(port, () => {
  console.log('Mi puerto es: ' + port)
})

routersAPI(app)
