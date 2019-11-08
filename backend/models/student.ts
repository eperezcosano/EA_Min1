import {Schema, model} from 'mongoose';

const StudentSchema: Schema = new Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    phones: { type: Array, required: true },
    studies: { type: Array, required: true }
});

export default model('Student', StudentSchema);
