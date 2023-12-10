import {mysqlconnFn} from "$lib/db/mysql.js"
import bcrypt from "bcrypt";
import {redirect} from '@sveltejs/kit';
import {fail} from "@sveltejs/kit";

export const actions = {
    register: async ({request, cookies}) => {
        const connection = await mysqlconnFn();
        const data = await request.formData();

        const email = data.get('email');
        const username = data.get('username');
        const password = await bcrypt.hash(data.get('password'), 10);
        const name = data.get('name')

        let fields = [{fieldName: "email", value: email}, {fieldName: "username", value: username},
            {fieldName: "password", value: password}, {fieldName: "name", value: name}]


        const emptyField = fields.find(field => field.value === '')
        if (emptyField) {
            return fail(422, {
                error: `You must enter a ${emptyField.fieldName}`
            })
        }

        try {
            await connection.query("INSERT INTO users(username, email, password, name) VALUES (?, ?, ?, ?)",
                [username, email, password, name])
        } catch (error) {
            if (error.code === 'ER_DUP_ENTRY') {
                const errorMessage = error.message.split('key ')[1].split('.')[1].slice(0, -1);

                return fail(422, {
                    email: email,
                    username: username,
                    name: name,
                    error: `Another user already has the ${errorMessage} '${fields.find(field => field.fieldName === errorMessage).value}'`
                })
            } else {
                return fail(422, {
                    error: "An error occurred. Please try again"
                })
            }
        }


        cookies.set('email:', email, {path: '/'})
        throw redirect(307, '/notes')
    }
};