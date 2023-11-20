const {Schema, model} = require('mongoose')

const MovementSchema = Schema({
    uid: {
        type: String,
        required: true
    },
    oid: {
        type: String,
        required: true
    },
    createAt: {
        type: Date,
        required: true
    },
    cant: {
        type: Number,
        required: true
    },
    tipe: {
        type: String,
        required: true
    },
    origin: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    
})


MovementSchema.method('toJSON', function(){
    const { __v, _id, ...object} = this.toObject();
    object.id = _id;
    return object;

})

module.exports = model( 'Movement', MovementSchema);