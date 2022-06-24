const { Router } = require('express');
const { getApiInfo, getName, getCountriesFromDb } = require('./countryController')

const router = Router();

//ruta de paises, si no le llega un nombre por query, trae todos los paises 
router.get('/countries', async (req, res, next) => {
    const name = req.query.name;
    const countries = await getCountriesFromDb();

    try {
        if(name){
            const countryByName = await getName(name);
            countryByName?res.status(200).send(countryByName):
            res.send(`The name "${name}" don't exist, please try with another name`)
        }else{
            res.status(201).send(countries)
        }
         
            

    } catch (error) {
        next(error)
    };
}
)

//ruta de id 
router.get('/countries/:id', async (req, res, next) => {

    const id = req.params.id;
    const ID = id.toUpperCase();
    
    let allCountries = await getApiInfo();

    console.log(ID);
 
    try {
        if (id) {

            let countryId = allCountries.filter(e => e.cca3 === ID || e.id === ID );
    

            countryId.length ?
                res.status(200).send(countryId) :
                res.status(404).send(`The code "${id}" don't exist, please try with another code`)
        }

    } catch (error) {
        next(error)
    };
}
)

module.exports = router


