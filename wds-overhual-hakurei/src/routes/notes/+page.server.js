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

export const actions = {
    newNoteTitle: async ({request}) => {
        const connection = await mysqlconnFn();
        const data = await request.formData();

        const newTitle = data.get('title');
        const id = data.get('id');

        await connection.query("UPDATE Notes SET name=(?) WHERE id=(?)", [newTitle, id])

        return {success: true, type: "title"}
    },

    setNoteContent: async ({request}) => {
        const connection = await mysqlconnFn();
        const data = await request.formData();

        const newContent = data.get("content");
        const id = data.get("id");

        await connection.query("UPDATE Notes SET content=(?) WHERE id=(?)", [newContent, id])

        return {success: true, type: "content"}
    }
}