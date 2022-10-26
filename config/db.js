const sequelize = require('./seq')
const colors = require('colors')
const {DataTypes} = require('sequelize')

//crear instancia de el modelo User
const UserModel = require('../models/user')
const User = UserModel(sequelize, DataTypes)

//definir la funcion de conexion a la base de datos


const connectDB = async ()=>{
    try{
    //conectarse a la base de datos 
    await sequelize.authenticate()
    console.log('Conectado a mysql'.bgRed)
    const jane = await User.create
    ({ username: "Jack", email: "jogonzale48♠4misena.edu.co", password:"123456" });
    console.log("Jane's auto-generated ID:", jane.id);
    }
    catch(error)
    {
        console.log(error)
    }
} 

connectDB()