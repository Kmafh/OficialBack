/*
    Loans
    ruta: '/api/loan'
*/
const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

const { validarJWT } = require('../middlewares/validar-jwt');

const {
    getLoans,
    crearLoan,
    actualizarLoan,
    borrarLoan,
    getLoanById
} = require('../controllers/loans')


const router = Router();

router.get( '/:uid', validarJWT, getLoans);

router.post( '/',
    [
        validarJWT,
        check('origin','El name del registro es necesario').not().isEmpty(),
        
        validarCampos
    ], 
    crearLoan 
);

router.put( '/:id',
    [
        validarJWT,
        check('origin','El name del médico es necesario').not().isEmpty(),
        check('cant','El hospital id debe de ser válido').not().isEmpty(),
        validarCampos
    ],
    actualizarLoan
);

router.delete( '/:id',
    validarJWT,
    borrarLoan
);

router.get( '/:id',
    validarJWT,
    getLoanById
);



module.exports = router;



