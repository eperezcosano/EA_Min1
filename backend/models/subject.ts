import {Schema, model} from 'mongoose';

const SubjectSchema: Schema = new Schema({
    name: { type: String, required: true },
    students: { type: Array, required: true }
});

export default model('Subject', SubjectSchema);
