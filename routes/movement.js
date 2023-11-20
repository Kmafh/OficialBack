/*
    Movements
    ruta: '/api/movement'
*/
const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

const { validarJWT } = require('../middlewares/validar-jwt');

const {
    getMovements,
    crearMovement,
    actualizarMovement,
    borrarMovement,
    getMovementById,
    getMovementByOid
} = require('../controllers/movements')


const router = Router();

router.get( '/:uid', validarJWT, getMovements);

router.post( '/',
    [
        validarJWT,
        check('origin','El name del registro es necesario').not().isEmpty(),
        
        validarCampos
    ], 
    crearMovement 
);

router.put( '/:id',
    [
        validarJWT,
        check('origin','El name del médico es necesario').not().isEmpty(),
        check('cant','El hospital id debe de ser válido').not().isEmpty(),
        validarCampos
    ],
    actualizarMovement
);

router.delete( '/:id',
    validarJWT,
    borrarMovement
);

router.get( '/:id',
    validarJWT,
    getMovementById
);
router.get( '/item/:oid',
    validarJWT,
    getMovementByOid
);


module.exports = router;



