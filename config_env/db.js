const mongoose = require('mongoose')

//const uri = 'mongodb+srv://Jack:52356427@cluster0.ve3vaeo.mongodb.net/bootcamps-sena?retryWrites=true&w=majority'
const uri = 'mongodb://localhost:27017/bootcamps-sena'

//componente de conexion a BD
//tipo: funcional

const connectDB= async() => {
    const conn = await mongoose.connect(uri , {
        useNewUrlParser: true,
        useUnifiedTopology: true 
    })

    console.log(`MongoDB Conectado:  ${conn.connection.host}` )
}

connectDB()