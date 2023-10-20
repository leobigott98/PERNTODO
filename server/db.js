const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password:"L30n4rd01705",
    host: "localhost",
    port: 5432,
    database: "perntodo"
});

module.exports = pool;