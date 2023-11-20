/*
    Alerts
    ruta: '/api/alert'
*/
const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

const { validarJWT } = require('../middlewares/validar-jwt');

const {
    getAlerts,
    crearAlert,
    actualizarAlert,
    borrarAlert,
    getAlertById
} = require('../controllers/alerts')


const router = Router();

router.get( '/:uid', validarJWT, getAlerts);

router.post( '/',
    [
        validarJWT,
        check('origin','El name del registro es necesario').not().isEmpty(),
        
        validarCampos
    ], 
    crearAlert 
);

router.put( '/:id',
    [
        validarJWT,
        check('uid','El uid del médico es necesario').not().isEmpty(),
        check('associationId','El associationId id debe de ser válido').not().isEmpty(),
        validarCampos
    ],
    actualizarAlert
);

router.delete( '/:id',
    validarJWT,
    borrarAlert
);

router.get( ':id',
    validarJWT,
    getAlertById
);



module.exports = router;



