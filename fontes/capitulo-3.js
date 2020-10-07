//3.1
node -v

//3.2
console.log('Olá mundo!');

//3.3
node /documents/index.js

//3.4
console.log('Hello World');

//3.5
npm install mysql2

//3.6
ALTER USER 'root'@'localhost' IDENTIFIED BY '';
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'sua-senha-aqui';

//3.7
async function connect(){
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;

    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection("mysql://root:luiztools@localhost:3306/crud");
    console.log("Conectou no MySQL!");
    global.connection = connection;
    return connection;
}

//3.8
const db = require('./db');

//3.9
node index

//3.10
async function selectCustomers(){
    const conn = await connect();
    const [rows] = await conn.query('SELECT * FROM clientes;');
    return rows;
}

module.exports = { selectCustomers }

//3.11
(async () => {
    const db = require("./db");
    console.log('Começou!');

    console.log('SELECT * FROM CLIENTES');
    const clientes = await db.selectCustomers();
    console.log(clientes);
})();

//3.12
async function insertCustomer(customer){
    const conn = await connect();
    const sql = 'INSERT INTO clientes(nome,idade,uf) VALUES (?,?,?);';
    const values = [customer.nome, customer.idade, customer.uf];
    return await conn.query(sql, values);
}

module.exports = { selectCustomers, insertCustomer }

//3.13
(async () => {
    const db = require("./db");
    console.log('Começou!');
    
    console.log('INSERT INTO CLIENTES');
    const result = await db.insertCustomer({nome: "Zé", idade: 18, uf: "SP"});
    console.log(result);

    console.log('SELECT * FROM CLIENTES');
    const clientes = await db.selectCustomers();
    console.log(clientes);
})();

//3.14
async function updateCustomer(id, customer){
    const conn = await connect();
    const sql = 'UPDATE clientes SET nome=?, idade=?, uf=? WHERE id=?';
    const values = [customer.nome, customer.idade, customer.uf, id];
    return await conn.query(sql, values);
}

module.exports = { selectCustomers, insertCustomer, updateCustomer }

//3.15
console.log('UPDATE CLIENTES');
const result2 = await db.updateCustomer(6, {nome: "Zé José", idade: 19, uf: "SP"});
console.log(result2);

//3.16
async function deleteCustomer(id){
    const conn = await connect();
    const sql = 'DELETE FROM clientes where id=?;';
    return await conn.query(sql, [id]);
}

module.exports = {selectCustomers, insertCustomer, updateCustomer, deleteCustomer}

//3.17
console.log('DELETE FROM CLIENTES');
const result3 = await db.deleteCustomer(7);
console.log(result3);