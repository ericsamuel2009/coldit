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
               res.send("registro no encontrado")
            }
         }
      }
   );
 })

 router.post('/', async (req,res)=>{
   const result = await db.query('INSERT INTO item set ?', [req.body]);
   res.json({ message: 'ITEM GUARDADO' });
 })


router.get('/:codigo', async (req,res)=>{ //ULTIMOS POST
   const {codigo} = req.params;
  var query = await db.query('SELECT valor  FROM producto WHERE codigo = ?',[codigo], function(error, result){
        if(error){
           throw error;
        }else{
           var resultado = result;
           if(resultado.length > 0){
              res.json(resultado)
           }else{
              res.send("No Hay Registros En valor")
           }
        }
     }
  );
})

router.get('/redes', async (req,res)=>{
  var query = await db.query("SELECT * FROM redes WHERE estadoRed = ?",[1],function(error,result){
    if (error) {
      throw error;
    }else{
        if (result.length > 0) {
          res.json(result);
        }else {
          res.send("No se Encontro Ningun registro")
        }
    }
  })
})

module.exports = router
