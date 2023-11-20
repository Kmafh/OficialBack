/*
    Friends
    ruta: '/api/friend'
*/
const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

const { validarJWT } = require('../middlewares/validar-jwt');

const {
    getFriends,
    crearFriend,
    actualizarFriend,
    borrarFriend,
    getFriendById
} = require('../controllers/friends')


const router = Router();

router.get( '/:uid', validarJWT, getFriends);

router.post( '/',
    [
        validarJWT,
    ], 
    crearFriend 
);

router.put( '/:id',
    [
        validarJWT,
    ],
    actualizarFriend
);

router.delete( '/:id',
    validarJWT,
    borrarFriend
);

router.get( '/:id',
    validarJWT,
    getFriendById
);



module.exports = router;



