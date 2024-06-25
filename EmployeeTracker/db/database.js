const mysql = require('mysql');

class Database {
    constructor (options) {
        this.options = options
        this.db = null
    }

    validate () {
        
        const { host, user, password, database } = this.options;
        if (!host || !user || !password || !database)
            throw new Error('Database configuration is invalid.');
        return;
    }

    connect () {
        this.validate();

        const { host, user, password, database } = this.options;

        this.db = mysql.createConnection(
        {
            host: host,
            user: user,
            password: password,
            database: database
        },
        console.log('Connected to the Employee database.')
        );
    }
    disconnect () {
        this.db.disconnect();
    }
}

module.exports = Database;