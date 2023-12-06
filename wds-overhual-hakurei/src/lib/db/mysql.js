import mysql from "mysql2/promise";

let connection = null;

export function mysqlconnFn() {
    if (!connection) {
        // used for development with MAMP
        // mysqlconn = mysql.createConnection({
        //   host: "127.0.0.1",
        //   user: "root",
        //   password: "",
        //   database: "statedata",
        // });
        connection = mysql.createConnection({
            host: "162.241.218.208",
            user: "algyvwmy_state_reader",
            password: "SveltekitMySQL",
            database: "algyvwmy_states",
        });
    }

    return connection;
}