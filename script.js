const { Client, Pool } = require('pg');
const connectionString = "postgresql://user2:12345678@localhost:5433/practica_db";

const cliente = new Client({connectionString});

// const cliente = new Client({
//     user: 'user2',
//     host: 'localhost',
//     database: 'practica_db',
//     password: '12345678',
//     port: 5433,
//    })

cliente.connect()
cliente.query('SELECT * FROM cursos', (err, res) => {
    console.log(err, res);
    cliente.end();
})

const pool = new Pool({connectionString});

pool.query('SELECT * FROM estudiantes', (err, res) => {
    console.log(err, res);
    pool.end();
})