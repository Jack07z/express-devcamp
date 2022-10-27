//1. crear el objeto express
const express = require('express')

//2. citar las dependencias necesarias para el proyecto 
const dotenv = require('dotenv')
const colors = require('colors')
const connectDB = require('./config/db')
const listEndpoint = require('express-list-endpoints')

//las rutas de ruta 
const bootcampRoutes = require('./routes/BootcampRoutes') 
const CoursesRoute = require('./routes/CoursesRoute') 
const UserRoutes = require('./routes/UserRoutes') 

//3. establecer archivo de configuracion 
dotenv.config({
    path:'./config/config.env'
})
console.log(process.env.PORT)

//Crear el objeto aplicacion 
//para el servidor de desarrollo 
const app = express()
//validemos el objeto application
//para recibir datos en formato json
app.use(express.json())

//conexion a bd
connectDB()

//rutas de proyecto 
app.use('/api/v1/Courses' , CoursesRoute)
app.use('/api/v1/users', UserRoutes)
//rutas de proyecto 
app.use('/api/v1/bootcamps' , bootcampRoutes)

//imprimir la lista de endpoints validas del proyecto
console.log(listEndpoint(app))

//rutas de aplicacion 
app.get('/' , (request , response )=>{
    response
    .status(200)
    .json({
        "success": true,
        "data" : "request exitosa"
    })
})
app.listen(process.env.PORT , ()=>{
    console.log(`servidor activo en puerto 5000`.bgGreen)
})