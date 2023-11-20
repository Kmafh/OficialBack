const { response } = require('express');
const bcrypt = require('bcryptjs');

const Usuario = require('../models/usuario');
const { generarJWT } = require('../helpers/jwt');
const { googleVerify } = require('../helpers/google-verify');
const { transporter } = require('../helpers/email');


const login = async( req, res = response ) => {
    const { email, password } = req.body;
    try {
        // Verificar email
        const usuarioDB = await Usuario.findOne({ email });
        if ( !usuarioDB ) {
            return res.status(404).json({
                ok: false,
                msg: 'Email no encontrado'
            });
        }
        // Verificar contraseña
        const validPassword = bcrypt.compareSync( password, usuarioDB.password );
        if ( !validPassword ) {
            return res.status(400).json({
                ok: false,
                msg: 'Contraseña no válida'
            });
        }
        // Generar el TOKEN - JWT
        const token = await generarJWT( usuarioDB.id );
        res.json({
            ok: true,
            token
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }
}


const googleSignIn = async( req, res = response ) => {
    const googleToken = req.body.token;
    try {
        const { name, email, picture } = await googleVerify( googleToken );
        const usuarioDB = await Usuario.findOne({ email });
        let usuario;
        if ( !usuarioDB ) {
            // si no existe el usuario
            usuario = new Usuario({
                name: name,
                email,
                password: '@@@',
                img: picture,
                google: true
            });
        } else {
            // existe usuario
            usuario = usuarioDB;
            usuario.google = true;
        }

        // Guardar en DB
        await usuario.save();
        // Generar el TOKEN - JWT
        const token = await generarJWT( usuario.id );
        res.json({
            ok: true,
            token
        });

    } catch (error) {
        res.status(401).json({
            ok: false,
            msg: 'Token no es correcto',
        });
    }
}

const sendMail = async( req, res = response ) => {
    const { email, password, name } = req.body;
    verificationLink = "http://localhost:3000/api"
    try {
        // Verificar email
        const usuarioDB = await Usuario.findOne({ email });
        if ( usuarioDB ) {
            return res.status(404).json({
                ok: false,
                msg: 'Email registrado'
            });
        }
        // Verificar contraseña
        const salt = bcrypt.genSaltSync();
        const validPassword = bcrypt.hashSync( password, salt );
        if ( !validPassword ) {
            return res.status(400).json({
                ok: false,
                msg: 'Contraseña no válida'
            });
        }
        // Envio email
        await transporter.sendMail({
            from: '"Registro Vaidno Pro 👻" <artadapt@gmail.com>', // sender address
            to: `${name}`, // list of receivers
            subject: "Registro Vaidno Pro 👻", // Subject line
            html: `<b>Estas a un paso de unirte a Vaidno. Pincha en el este enlace para confirmar el registro.</b>"
            +"<a href='${verificationLink}/register?name:${name}?email:${email}?password:${validPassword}'>${verificationLink}</a>`, // html body
          });

        res.json({
            ok: true,
            token
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }
}

const renewToken = async(req, res = response) => {
    const uid = req.uid;
    // Generar el TOKEN - JWT
    const token = await generarJWT( uid );
    // Obtener el usuario por UID
    const usuario = await Usuario.findById( uid );
    res.json({
        ok: true,
        token,
        usuario
    });
}

module.exports = {
    login,
    googleSignIn,
    renewToken,
    sendMail
}
