import mysql from "mysql2/promise";

let connection = null;

export function mysqlconnFn() {
    if (!connection) {
        connection = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "JNE94PzjSFLd8kD!",
            database: "InkLink",
        });
    }

    return connection;
}