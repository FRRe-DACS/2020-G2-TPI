const express = require('express');
const router = express.Router();
const peticionController = require('../controllers/peticionControllers');
const loginController = require('../controllers/loginController')
const informesController = require('../controllers/informesController');
const centrosHospitalariosController = require('../controllers/centrosHospitalariosController');
const envioController = require('../controllers/envioController');

const recursosController = require('../controllers/recursosController');
const medicosController = require('../controllers/medicosController');
const statController = require('../controllers/statController')
// const obtenerInformesController = require('../controllers/obtenerInformesController')
const obtenerInformesController = require('../controllers/obtenerInformesController')

const ciudadController = require('../controllers/ciudadController');
const validacionController = require('../controllers/validacionController')
router.get('/',(req,res)=>{
    res.json({message:"mensaje escrito en consola"});
});


//Envios
// DOC STATUS: Complete 
router.get('/envioId',
    envioController.obtenerEnvioId
    );

router.get('/envios',
    envioController.obtenerEnvios
    );

// DOC STATUS: Complete
router.post('/envios', 
    envioController.nuevoEnvio);

router.post('/pruebas',(req,res)=>{
   
    
    res.send(req.body);
})
// DOC STATUS: Complete
router.post('/peticiones',
    peticionController.nuevaPeticion
)
// DOC STATUS: Complete
router.get('/peticiones',
    peticionController.obtenerPeticiones
)
// DOC STATUS: Complete
router.post('/login',
loginController.logUser
)
// DOC STATUS: Complete

// DOC STATUS: Complete
router.post('/register',
loginController.registerUser
)

// DOC STATUS: Complete
router.post('/centrosHospitalarios',
centrosHospitalariosController.registerCentro
)
// DOC STATUS: Complete
router.get('/centrosHospitalarios',
centrosHospitalariosController.getCentros
)
// DOC STATUS: Complete
router.get('/centroHospitalarioId',
centrosHospitalariosController.getCentroId
)
// DOC STATUS: Complete
router.post('/informes',
informesController.registrarInforme
)
// DOC STATUS: Complete
router.get('/informes',
informesController.getInforme
)
// DOC STATUS: Complete
router.post('/recursos',
recursosController.registrarRecursos
)
// DOC STATUS: Complete
router.post('/generarRecursos',
recursosController.generarRecursosRandom
)
// DOC STATUS: Complete
router.get('/recursos',
recursosController.getRecursos
)
// DOC STATUS: Complete
router.post('/medicos',
medicosController.registrarMedicos
)
// DOC STATUS: Complete
router.get('/medicos',
medicosController.getMedicos
)
// DOC STATUS: Complete
router.post('/generarMedicos',
medicosController.generarMedicosRandom
)
// DOC STATUS: Complete
router.get('/rechazarPeticion',
peticionController.rechazarPeticion
)
// DOC STATUS: Complete
router.get('/encontrarPeticion',
peticionController.encontrarPeticionId
)
// DOC STATUS: Complete
router.get('/actualizarEstadisticas',
statController.registrarNuevaEstadistica
)
// DOC STATUS: Complete
router.get('/stat',
statController.obtenerTodasEstadisticas
)
// DOC STATUS: Complete
router.post('/stat',
statController.agregarEstadistica
)
// DOC STATUS: Complete
router.get('/encontrarPeticion',
peticionController.encontrarPeticionId
)

// DOC STATUS: Complete
router.get('/actualizarEstadisticas',statController.registrarNuevaEstadistica)
// DOC STATUS: Complete
router.get('/stat',statController.obtenerTodasEstadisticas)
// DOC STATUS: Complete
router.post('/stat',statController.agregarEstadistica)
// DOC STATUS: Complete
router.post('/ciudad',ciudadController.nuevaCiudad)
// DOC STATUS: Complete
router.get('/ciudad',ciudadController.getCiudad)

// con el fin de probar la lectura de informes, usamos el siguiente endpoint
router.post('/obtenerDatos',
obtenerInformesController.obtenerDatos
)

module.exports = router;
