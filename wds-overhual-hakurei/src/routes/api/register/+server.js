import {json} from "@sveltejs/kit";
import {mysqlconnFn} from "$lib/db/mysql";
import bcrypt from "bcrypt";

export async function POST({request}) {
    const {username, email, password} = request.json();
    console.log(username, email, password);

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    const connection = await mysqlconnFn();


    const results = await connection.query(
        "INSERT INTO users (username, email, password) VALUES (" + username + ", " + email + ", " + hashedPassword + ")")
        .then(function ([rows, fields]) {
            //        console.log(rows);
            return rows;
        });

    return {
        data: results,
    };
}