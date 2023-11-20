const { response } = require('express');

const Loan = require('../models/loan');

const getLoans = async(req, res = response) => {
    const uid = req.params.uid;
    const loans = await Loan.find({ uid: uid })
    res.json({
        ok: true,
        loans
    })
}

const getLoanById = async(req, res = response) => {
    const id = req.params.id;
    try {
        const loan = await Loan.findById(id)
                                    .populate('usuario','name img')
                                    .populate('hospital','name img');
        res.json({
            ok: true,
            loan
        })
    } catch (error) {
        console.log(error);
        res.json({
            ok: true,
            msg: 'Hable con el administrador'
        })
    }
}

const crearLoan = async (req, resp = response) => {
    const uid = req.uid;
    const loan = new Loan({
        usuario: uid,
        ...req.body
    });
     loan.createAt= new Date()
    try {
        const loanDB = await loan.save();
        console.log(loanDB)
        resp.json({
            ok: true,
            loan: loanDB
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }
}

const actualizarLoan = async(req, res = response) => {
    const id  = req.params.id;
    const uid = req.uid;
    try {
        const loan = await Loan.findById( id );
        if ( !loan ) {
            return res.status(404).json({
                ok: true,
                msg: 'Loan no encontrado por id',
            });
        }
        const cambiosLoan = {
            ...req.body,
            usuario: uid
        }
        const loanActualizado = await Loan.findByIdAndUpdate( id, cambiosLoan, { new: true } );
        res.json({
            ok: true,
            loan: loanActualizado
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }
}

const borrarLoan = async (req, res = response) => {
    const id  = req.params.id;
    try {
        const loan = await Loan.findById( id );
        if ( !loan ) {
            return res.status(404).json({
                ok: true,
                msg: 'Loan no encontrado por id',
            });
        }
        await Loan.findByIdAndDelete( id );
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
    getLoans,
    crearLoan,
    actualizarLoan,
    borrarLoan,
    getLoanById
}