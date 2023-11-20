const {Schema, model} = require('mongoose')

const LoanSchema = Schema({
    origin: {
        type: String,
        required: true
    },
    cant: {
        type: Number,
        required: true,
    },
    cantFinish: {
        type: Number,
    },
    cantPendiente: {
        type: Number,
    },
    recibos: {
        type: Number,
    },
    recibosPendientes: {
        type: Number,
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


LoanSchema.method('toJSON', function(){
    const { __v, _id, ...object} = this.toObject();
    object.id = _id;
    return object;

})

module.exports = model( 'Loan', LoanSchema);