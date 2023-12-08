import {mysqlconnFn} from "$lib/db/mysql";
import bcrypt from "bcrypt";
import {error, fail, redirect} from "@sveltejs/kit";

export const actions = {
    login: async ({request}) => {
        const connection = await mysqlconnFn();
        const data = await request.formData();

        const username = data.get('username');
        const password = data.get('password');

        const fields = [{fieldName: "username", value: username}, {fieldName: "password", value: password}]
        for (const field in fields) {
            if (field.value === '') {
                return fail(422, {
                    error: `You must enter a ${field.fieldName}`
                })
            }
        }

        let results = await connection.query("SELECT * FROM users WHERE username = (?)", [username])

        if (results[0].length === 0) {
            return fail(422, {
                error: "Username not found. Please try again."
            })
        }

        if (!(await bcrypt.compare(password, results[0][0].password).then(res => {
            return res;
        }))) {
            return fail(422, {
                username: username,
                error: "Password was incorrect. Please try again."
            })
        }

        throw redirect(307, '/notes')
    }

}