import { Request, Response } from 'express';
import User from '../models/user';

function getUsers(req:Request, res:Response): void {
    User.find({}).then((data) => {
        let status = 200;
        if(data == null) status = 404;
        res.status(200).json(data);
    }).catch((err) => {
        res.status(500).json(err);
    })
}

function getUserById(req: Request, res: Response) {
    const id:string = req.params.id;
    User.findOne({ "_id": id }).then((data) => {
        res.status(200).json(data);
    }).catch((err) => {
        res.status(500).json(err);
    })
}

export default { getUsers, getUserById }
