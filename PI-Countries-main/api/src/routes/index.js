const { Router } = require('express');
const countries = require('./countries.js')


// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/', countries)

router.use('/', countries)





module.exports = router;
