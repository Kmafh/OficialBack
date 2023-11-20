const { response } = require('express');

const Project = require('../models/project');

const getProjects = async(req, res = response) => {
    const uid = req.params.uid;
    
    try {
        const projects = await Project.find({ uid: uid })
        res.json({
            ok: true,
            projects
        })
    } catch (error) {
        console.log(error);
        res.json({
            ok: true,
            msg: 'Hable con el administrador'
        })
    }
}

const getProjectById = async(req, res = response) => {
    const id = req.params.id;
    try {
        const project = await Project.findById(id)
        res.json({
            ok: true,
            project
        })
    } catch (error) {
        console.log(error);
        res.json({
            ok: true,
            msg: 'Hable con el administrador'
        })
    }
}

const crearProject = async (req, resp = response) => {
    const uid = req.uid;
    const project = new Project({
        usuario: uid,
        ...req.body
    });
     project.createAt= new Date()
    try {
        const projectDB = await project.save();
        resp.json({
            ok: true,
            project: projectDB
        })

    } catch (error) {
        console.log(error);
        resp.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }
}

const actualizarProject = async(req, res = response) => {
    const id  = req.params.id;
    const uid = req.uid;
    try {
        const project = await Project.findById( id );
        if ( !project ) {
            return res.status(404).json({
                ok: true,
                msg: 'Project no encontrado por id',
            });
        }
        const cambiosProject = {
            ...req.body,
            usuario: uid
        }
        const projectActualizado = await Project.findByIdAndUpdate( id, cambiosProject, { new: true } );
        res.json({
            ok: true,
            project: projectActualizado
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }
}

const borrarProject = async (req, res = response) => {
    const id  = req.params.id;
    try {
        const project = await Project.findById( id );
        if ( !project ) {
            return res.status(404).json({
                ok: true,
                msg: 'Project no encontrado por id',
            });
        }
        await Project.findByIdAndDelete( id );
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
    getProjects,
    crearProject,
    actualizarProject,
    borrarProject,
    getProjectById
}