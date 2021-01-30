import { uuid } from 'uuidv4';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    id: {
        type: uuid(),
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    brithDate: {
        type: Date,
        required: true
    }

})

export default mongoose.model('Users', userSchema);