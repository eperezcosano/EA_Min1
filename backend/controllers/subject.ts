import { Request, Response } from 'express';
import Subject from '../models/subject';

function getSubjects(req:Request, res:Response): void {
    Subject.find({}, {name: 1}).then((data) => {
        res.status(200).json(data);
    }).catch((err) => {
        res.status(500).json(err);
    })
}

export default { getSubjects }
