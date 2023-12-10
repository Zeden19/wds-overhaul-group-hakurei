import {mysqlconnFn} from "$lib/db/mysql.js";

export async function load({cookies}) {
    const email = cookies.get('email');
    const connection = await mysqlconnFn();


    let data = await connection.query("SELECT * FROM users WHERE email = (?)", [email]);
    const userData = data[0][0];

    data = await connection.query("SELECT * FROM NOTES WHERE userid = (?)", [userData.id])
    const notesData = data[0];

    return {
        user: {id: userData.id, username: userData.username, email: userData.email, name: userData.name},
        notes: notesData
    }


}