const { response } = require('express');

const Alert = require('../models/alert');

const getAlerts = async(req, res = response) => {
    const uid = req.params.uid;
    try {
        const alerts = await Alert.find({ uid: uid })
        res.json({
            ok: true,
            alerts
        })
    } catch (error) {
        console.log(error);
        res.json({
            ok: true,
            msg: 'Hable con el administrador'
        })
    }
    
}

const getAlertById = async(req, res = response) => {
    const id = req.params.id;
    try {
        const alert = await Alert.findById(id)
        res.json({
            ok: true,
            alert
        })
    } catch (error) {
        console.log(error);
        res.json({
            ok: true,
            msg: 'Hable con el administrador'
        })
    }
}

const crearAlert = async (req, resp = response) => {
    const uid = req.uid;
    const alert = new Alert({
        usuario: uid,
        ...req.body
    });
     alert.createAt= new Date()
    try {
        const alertDB = await alert.save();
        resp.json({
            ok: true,
            alert: alertDB
        })

    } catch (error) {
        console.log(error);
        resp.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }
}

const actualizarAlert = async(req, res = response) => {
    const id  = req.params.id;
    const uid = req.uid;
    try {
        const alert = await Alert.findById( id );
        if ( !alert ) {
            return res.status(404).json({
                ok: true,
                msg: 'Alert no encontrado por id',
            });
        }
        const cambiosAlert = {
            ...req.body,
            usuario: uid
        }
        const alertActualizado = await Alert.findByIdAndUpdate( id, cambiosAlert, { new: true } );
        res.json({
            ok: true,
            alert: alertActualizado
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }
}

const borrarAlert = async (req, res = response) => {
    const id  = req.params.id;
    try {
        const alert = await Alert.findById( id );
        if ( !alert ) {
            return res.status(404).json({
                ok: true,
                msg: 'Alert no encontrado por id',
            });
        }
        await Alert.findByIdAndDelete( id );
        res.json({
            ok: true,
            msg: 'Médico borrado'
        }); 
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }
}

module.exports = {
    getAlerts,
    crearAlert,
    actualizarAlert,
    borrarAlert,
    getAlertById
}