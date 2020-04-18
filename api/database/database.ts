const mysql   = require('mysql');
const llave = require('./llave.ts');

//CONEXION
const conn = mysql.createConnection(llave.db);
conn.connect(function(error){
   if(error){
      throw error;
   }else{
      console.log('Conexion a MYSQL correcta.');
   }
});

module.exports = conn
