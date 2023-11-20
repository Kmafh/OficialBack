const { response } = require('express');

const Movement = require('../models/movement');

const getMovements = async(req, res = response) => {
    const uid = req.params.uid;
    const movements = await Movement.find({ uid: uid })
    res.json({
        ok: true,
        movements
    })
}

const getMovementById = async(req, res = response) => {
    const id = req.params.id;
    try {
        const movement = await Movement.findById(id)
                                    .populate('usuario','name img')
                                    .populate('hospital','name img');
        res.json({
            ok: true,
            movement
        })
    } catch (error) {
        console.log(error);
        res.json({
            ok: true,
            msg: 'Hable con el administrador'
        })
    }
}

const getMovementByOid = async(req, res = response) => {
    const oid = req.params.oid;
    const movements = await Movement.find({oid})
    res.json({
        ok: true,
        movements
    })
}

const crearMovement = async (req, res = response) => {
    const uid = req.uid;
    const movement = new Movement({
        usuario: uid,
        ...req.body
    });
     movement.createAt= new Date()
    try {
        const movementDB = await movement.save();
        res.json({
            ok: true,
            movement: movementDB
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }
}

const actualizarMovement = async(req, res = response) => {
    const id  = req.params.id;
    const uid = req.uid;
    try {
        const movement = await Movement.findById( id );
        if ( !movement ) {
            return res.status(404).json({
                ok: true,
                msg: 'Movement no encontrado por id',
            });
        }
        const cambiosMovement = {
            ...req.body,
            usuario: uid
        }
        const movementActualizado = await Movement.findByIdAndUpdate( id, cambiosMovement, { new: true } );
        res.json({
            ok: true,
            movement: movementActualizado
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }
}

const borrarMovement = async (req, res = response) => {
    const id  = req.params.id;
    try {
        const movement = await Movement.findById( id );
        if ( !movement ) {
            return res.status(404).json({
                ok: true,
                msg: 'Movement no encontrado por id',
            });
        }
        await Movement.findByIdAndDelete( id );
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
    getMovements,
    crearMovement,
    actualizarMovement,
    borrarMovement,
    getMovementById,
    getMovementByOid
}