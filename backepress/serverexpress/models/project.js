const {Schema, model} = require('mongoose')

const ProjectSchema = Schema({
    titulo: {
        type: String,
        required: true
    },
    actual: {
        type: Number,
        required: true,
    },
    cantObjetivo: {
        type: Number,
        required: true,
    },
    tipe: {
        type: String,
        required: true,
    },
    createAt: {
        type: String,
    },
    finishAt: {
        type: String,
    },
    uid:{
        type: String,
    },
    description:{
        type: String,
    },
    img:{
        type: String,
    },
    active: {
        type: Boolean,
        default: true
    }
})


ProjectSchema.method('toJSON', function(){
    const { __v, _id, ...object} = this.toObject();
    object.id = _id;
    return object;

})

module.exports = model( 'Project', ProjectSchema);