const { response } = require('express');

const Friend = require('../models/friend');

const getFriends = async(req, res = response) => {
    const uid = req.params.uid;
    
    try {
        const friends = await Friend.find({ uid: uid })
        res.json({
            ok: true,
            friends
        })
    } catch (error) {
        console.log(error);
        res.json({
            ok: true,
            msg: 'Hable con el administrador'
        })
    }
}

const getFriendById = async(req, res = response) => {
    const id = req.params.id;
    try {
        const friend = await Friend.findById(id)
        res.json({
            ok: true,
            friend
        })
    } catch (error) {
        console.log(error);
        res.json({
            ok: true,
            msg: 'Hable con el administrador'
        })
    }
}

const crearFriend = async (req, resp = response) => {
    const uid = req.uid;
    const friend = new Friend({
        usuario: uid,
        ...req.body
    });
     friend.createAt= new Date()
    try {
        const friendDB = await friend.save();
        resp.json({
            ok: true,
            friend: friendDB
        })
    } catch (error) {
        console.log(error);
        resp.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }
}

const actualizarFriend = async(req, res = response) => {
    const id  = req.params.id;
    const uid = req.uid;
    try {
        const friend = await Friend.findById( id );
        if ( !friend ) {
            return res.status(404).json({
                ok: true,
                msg: 'Friend no encontrado por id',
            });
        }
        const cambiosFriend = {
            ...req.body,
            usuario: uid
        }
        const friendActualizado = await Friend.findByIdAndUpdate( id, cambiosFriend, { new: true } );
        res.json({
            ok: true,
            friend: friendActualizado
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }
}

const borrarFriend = async (req, res = response) => {
    const id  = req.params.id;
    try {
        const friend = await Friend.findById( id );
        if ( !friend ) {
            return res.status(404).json({
                ok: true,
                msg: 'Friend no encontrado por id',
            });
        }
        await Friend.findByIdAndDelete( id );
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
    getFriends,
    crearFriend,
    actualizarFriend,
    borrarFriend,
    getFriendById
}