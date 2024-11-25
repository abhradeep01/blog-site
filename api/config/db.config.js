import mysql from 'mysql2';

//config database
export const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"blog_info"
});

//connect database
db.connect();
