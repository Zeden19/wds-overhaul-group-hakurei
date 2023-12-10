import {mysqlconnFn} from "$lib/db/mysql";
import { json } from '@sveltejs/kit';


export async function POST({request}) {
    const {name, content, id} = await request.json();
    let mysqlconn = await mysqlconnFn();
    await mysqlconn.query("INSERT INTO Notes(name, content, userid) VALUES(?, ?, ?)",
        [name, content, id]);

    let results = mysqlconn.query("SELECT * FROM Notes WHERE id = LAST_INSERT_ID()")

     return json(await results);
}