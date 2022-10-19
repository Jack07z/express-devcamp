const express = require ('express')

//definir objeto de ruteo
const router = express.Router()

//listar todos los Course
router.get('/' , (req, resp)=>{
    resp
        .status(200)
        .json({
            "success": true,
            "data": "aqui van a salir todos los Course"
        })
})

// listar Course por id
router.get('/:id' , (req, resp)=>{
    console.log(req.params.id)
    resp
        .status(200)
        .json({
            "success": true,
            "data": `aqui va a salir el Course cuyo id es ${req.params.id}`
        })
})

//actualizar Course 
router.put('/:id' , (req, resp)=>{
    console.log(req.params.id)
    resp
        .status(200)
        .json({
            "success": true,
            "data": `aqui va a actualizarse el Course cuyo id es ${req.params.id}`
        })
})

//eliminar Course
router.delete('/:id' , (req, resp)=>{
    console.log(req.params.id)
    resp
        .status(200)
        .json({
            "success": true,
            "data": `aqui va a borrarse el Course cuyo id es ${req.params.id}`
        })
})

//crear nuevo Course
router.post('/' , (req, resp)=>{
    resp
        .status(200)
        .json({
            "success": true,
            "data": "aqui vamos a registra un nuevo Course"
        })
})

module.exports = router