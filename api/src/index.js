
const express = require('express');
const morgan  = require('morgan');
const app     = express();
const cors    = require('cors');
// import { } from './rutas/posts';

//CONFIGURACION
app.set('port',process.env.PORT || 3000);
app.set('json spaces',2)

//MIDDLEWARES
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({
  extended:false
}))

//RUTAS
app.use('/api/productos',require('./rutas/Productos'))
app.use('/api/items',require('./rutas/items'))
app.use('/api/facturas',require('./rutas/facturas'))

//SERVIDOR INICIADO
app.listen(app.get('port'),()=>{
    console.log("SERVIDOR 3000 INICIADO");
})
