const { Router } = require('express');
const router = Router();
const db = require('./../../database/database.ts');


//RUTAS
router.get('/', async (req,res)=>{ //TODO LOS Items
   var query = await db.query('SELECT * FROM item JOIN producto ON producto = codigo', function(error, result){
         if(error){
            throw error;
         }else{
            var resultado = result;
            if(resultado.length > 0){
               res.json(resultado)
            }else{
               res.send("item no encontrado")
            }
         }
      }
   );
 })

 router.post('/', async (req,res)=>{ //AGREGAR UN NUEVO ITEM
   const result = await db.query('INSERT INTO item set ?', [req.body]);
   res.json({ message: 'ITEM GUARDADO' });
 })


router.get('/:codigo', async (req,res)=>{ 
   const {codigo} = req.params;
  var query = await db.query('SELECT valor  FROM producto WHERE codigo = ?',[codigo], function(error, result){
        if(error){
           throw error;
        }else{
           var resultado = result;
           if(resultado.length > 0){
              res.json(resultado)
           }else{
              res.send("No Hay Registros En producto")
           }
        }
     }
  );
})

module.exports = router
