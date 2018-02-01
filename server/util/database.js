const mysql = require('mysql');

module.exports = class Database {
  constructor(dbConfig) {
    this.pool = mysql.createPool(dbConfig);
  }

  getConnection() {
    return new Promise((resolve, reject) => {
      this.pool.getConnection((err, connection) => {
        if (err)
          return reject(err);
        resolve(connection);
      });
    });
  }

  query(sql, args) {
    return new Promise((resolve, reject) => {
      this.getConnection()
        .then(connection => {
          connection.query(sql, args, (err, rows) => {
            connection.release();

            if (err)
              return reject(err);

            resolve(rows);
          });
        });
    });
  }
};