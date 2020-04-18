const { Router } = require('express');
const router = Router();
const db = require('./../../database/database.ts');

router.get('/', async (req,res)=>{
  const {id} = req.params;
  var query = await db.query('SELECT DISTINCT * FROM item JOIN producto ON producto = codigo GROUP BY producto',function(error,result){
    if (error) {
      throw error;
    }else{
      var resultado = result
      if (resultado.length > 0) {
        res.json(resultado)
      }else {
        res.send("NO SE ECONTRO NINGUN REGISTRO")
      }
    }
  });
})

router.get('/calcular/:id', async (req,res)=>{ // UL LI
  const {id} = req.params;
  var query = await db.query('SELECT producto,SUM(valorTotal) facturacion,nombre FROM item JOIN producto ON producto = codigo WHERE producto = ? ',[id],function(error,result){
    if (error) {
      throw error;
    }else{
      var resultado = result
      if (resultado.length > 0) {
        res.json(resultado)
      }else {
        res.send("NO SE ECONTRO NINGUN REGISTRO")
      }
    }
  });
})

module.exports = router
