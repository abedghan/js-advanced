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
// create user
export const create = (user: User, callback: Function) => {
    const queryString =
      "INSERT INTO jsusers (nume, prenume, email, datanastere, telefon) VALUES (?, ?, ?, ?, ?)";
      console.log(user);
    db.query(
      queryString,
      [user.nume, user.prenume, user.email, user.datanastere, user.telefon],
      (err, result) => {
        if (err) {
          callback(err);
        }
      
        
          const insertId = (<OkPacket>result).insertId;
          callback(null, insertId);
        
      }
    );
  };
  