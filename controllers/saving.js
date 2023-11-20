const { response } = require('express');

const Saving = require('../models/saving');

const getSavings = async(req, res = response) => {
    const uid = req.params.uid;
    const savings = await Saving.find({ uid: uid })


    res.json({
        ok: true,
        savings
    })
}

const getSavingById = async(req, res = response) => {

    const id = req.params.id;

    try {
        const saving = await Saving.findById(id)
    
        res.json({
            ok: true,
            saving
        })
        
    } catch (error) {
        console.log(error);
        res.json({
            ok: true,
            msg: 'Hable con el administrador'
        })
    }
}

const crearSaving = async (req, res = response) => {

    const uid = req.uid;
    const saving = new Saving({
        usuario: uid,
        ...req.body
    });
     saving.createAt= new Date()
    try {
        const savingDB = await saving.save();
        res.json({
            ok: true,
            saving: savingDB
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }
}

const actualizarSaving = async(req, res = response) => {
    
    const id  = req.params.id;
    const uid = req.uid;

    try {
        
        const saving = await Saving.findById( id );
        if ( !saving ) {
            return res.status(404).json({
                ok: true,
                msg: 'Saving no encontrado por id',
            });
        }

        const cambiosSaving = {
            ...req.body,
            usuario: uid
        }

        const savingActualizado = await Saving.findByIdAndUpdate( id, cambiosSaving, { new: true } );


        res.json({
            ok: true,
            saving: savingActualizado
        })

    } catch (error) {

        console.log(error);

        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }

}

const borrarSaving = async (req, res = response) => {
   
    const id  = req.params.id;

    try {
        
        const saving = await Saving.findById( id );

        if ( !saving ) {
            return res.status(404).json({
                ok: true,
                msg: 'Saving no encontrado por id',
            });
        }

        await Saving.findByIdAndDelete( id );

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
    getSavings,
    crearSaving,
    actualizarSaving,
    borrarSaving,
    getSavingById
}