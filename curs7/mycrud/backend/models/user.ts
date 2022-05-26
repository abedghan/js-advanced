import {User} from './../types/User'
import {db} from '../db'
import {OkPacket, RowDataPacket} from 'mysql2'
// Get all users 
export const findAll =(callback: Function)=>{
const queryString = `SELECT * FROM jsusers`;

db.query(queryString, (err, result) => {
    if (err) {
        callback(err);
    }
    const rows = <RowDataPacket[]>result;
    const users:User[]=[];
    rows.forEach((row) => {
        const user:User = {
            id: row.id,
            nume: row.nume,
            prenume: row.prenume,
            email: row.email,
            datanastere: row.datanastere,
            telefon: row.telefon,
            dataadaugare: row.dataadaugare,
            actiune:"",
        };
        users.push(user);
    });
    callback(null,users);
});
};