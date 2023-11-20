/*
    Savings
    ruta: '/api/saving'
*/
const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

const { validarJWT } = require('../middlewares/validar-jwt');

const {
    getSavings,
    crearSaving,
    actualizarSaving,
    borrarSaving,
    getSavingById
} = require('../controllers/saving')


const router = Router();

router.get( '/:uid', validarJWT, getSavings);

router.post( '/',
    [
        validarJWT,
        check('origin','El name del registro es necesario').not().isEmpty(),
        
        validarCampos
    ], 
    crearSaving 
);

router.put( '/:id',
    [
        validarJWT,
        check('origin','El name del médico es necesario').not().isEmpty(),
        check('cant','El hospital id debe de ser válido').not().isEmpty(),
        validarCampos
    ],
    actualizarSaving
);

router.delete( '/:id',
    validarJWT,
    borrarSaving
);

router.get( '/:id',
    validarJWT,
    getSavingById
);



module.exports = router;



