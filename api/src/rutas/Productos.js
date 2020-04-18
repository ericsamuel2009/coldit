const { Router } = require('express');
const router = Router();
const _ = require('underscore');
const db = require('./../../database/database.ts');


//RUTAS
router.get('/', async (req,res)=>{ //TODO LOS POSTS
  var query = await db.query('SELECT * from producto', function(error, result){
        if(error){
           throw error;
        }else{
           var resultado = result;
           if(resultado.length > 0){
              res.json(resultado)
           }else{
              res.send("registro no encontrado")
           }
        }
     }
  );
})

router.delete('/:id', async (req,res)=>{ //ELIMINAR UN PRODUCTO
  const {id} = req.params;
  var query = await db.query('DELETE FROM producto WHERE codigo =  ?',[id], function(error, result){
        if(error){
           throw error;
        }else{
          res.json({ message: "Producto Eliminado" });
        }
     }
  );
})

router.post('/', async (req,res)=>{
  //const { codigo, valor, nombre} = req.body;
  //const nuevoPost = {idPos,...req.body};
  const result = await db.query('INSERT INTO producto set ?', [req.body]);
  res.json({ message: 'PRODUCTO GUARDADO' });
})

router.put('/:id', async (req,res)=>{
  const { id } = req.params;
  const antes = req.body;
  await db.query('UPDATE producto set ? WHERE codigo = ?', [req.body, id]);
  res.json({ message: "PRODUCTO ACTUALIZADO" });
})

module.exports = router
