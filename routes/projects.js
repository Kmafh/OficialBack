/*
    Projects
    ruta: '/api/project'
*/
const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

const { validarJWT } = require('../middlewares/validar-jwt');

const {
    getProjects,
    crearProject,
    actualizarProject,
    borrarProject,
    getProjectById
} = require('../controllers/projects')


const router = Router();

router.get( '/:uid', validarJWT, getProjects);

router.post( '/',
    [
        validarJWT,
        check('origin','El name del registro es necesario').not().isEmpty(),
        
        validarCampos
    ], 
    crearProject 
);

router.put( '/:id',
    [
        validarJWT,
        validarCampos
    ],
    actualizarProject
);

router.delete( '/:id',
    validarJWT,
    borrarProject
);

router.get( ':id',
    validarJWT,
    getProjectById
);



module.exports = router;



