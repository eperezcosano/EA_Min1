import { Request, Response } from 'express';
import Student from '../models/student';

function getStudentsTelematics(req:Request, res:Response): void {
    Student.find({"studies": "Telematica"}).then((data) => {
        res.status(200).json(data);
    }).catch((err) => {
        res.status(500).json(err);
    })
}

function getStudentsSystems(req:Request, res:Response): void {
    Student.find({"studies": "Sistemas"}).then((data) => {
        res.status(200).json(data);
    }).catch((err) => {
        res.status(500).json(err);
    })
}

function getStudentsAeros(req:Request, res:Response): void {
    Student.find({"studies": "Aeros"}).then((data) => {
        res.status(200).json(data);
    }).catch((err) => {
        res.status(500).json(err);
    })
}

function getAll(req:Request, res:Response): void {
    Student.find({}).then((data) => {
        res.status(200).json(data);
    }).catch((err) => {
        res.status(500).json(err);
    })
}

function getStudentByName(req:Request, res:Response): void {
    let name: string = req.params.name;
    Student.find({name: name}).then((data) => {
        res.status(200).json(data);
    }).catch((err) => {
        res.status(500).json(err);
    })
}

export default { getStudentsTelematics, getStudentsSystems, getStudentsAeros, getAll, getStudentByName }
