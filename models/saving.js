const {Schema, model} = require('mongoose')

const SavingSchema = Schema({
    origin: {
        type: String,
        required: true
    },
    cant: {
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


SavingSchema.method('toJSON', function(){
    const { __v, _id, ...object} = this.toObject();
    object.id = _id;
    return object;

})

module.exports = model( 'Saving', SavingSchema);