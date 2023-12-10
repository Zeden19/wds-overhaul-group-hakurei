import {mysqlconnFn} from "$lib/db/mysql.js";

export async function load({cookies}) {
    const email = cookies.get('email');
    const connection = await mysqlconnFn();


    const data = await connection.query("SELECT * FROM users WHERE email = (?)", [email]);
    const userData = data[0][0];

    return {
        username: userData.username,
        email: userData.email,
        name: userData.name
    }


}