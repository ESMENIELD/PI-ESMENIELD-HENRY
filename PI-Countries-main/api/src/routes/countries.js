
const {Country, Activity} = require('../db')
const { Router } = require('express');



const axios = require ('axios')

const router = Router();

const getAllFromApi= async () => { //función que me trae todos los datos y es asiconcrónica para darle tiempo a la respuesta de la Api.
       
    const apiUrl = await axios.get('https://restcountries.com/v3/all');
    const apiInfo = await apiUrl.data.map(e =>{
        return {
            id: e.cca3,   //asi se llama la propiedad que provee el id en la api
            name: e.name,
            flag: e.flags,
            continent: e.region,
            subregion: e.subregion,
            capital: e.capital,
            area: e.area,
            population: e.population

        }
    });
    return apiInfo;
}

const getDbInfo = async () => {// función que tre la info de la base de datos que haya sido creada, tambien asíncrona.
    return await Country.findAll({
      include:{
        
          model: Activity,
          attributtes: ['name','dificulty','duration','season'],
          through: {
              attributes: []
          }
      }  
    })

};

const getAllCountries = async () => { //función que concatena los datos de la api y la base de datos.

    apiInfo= await getAllFromApi();
    dbInfo= await getDbInfo();
    AllInfo= apiInfo.concat(dbInfo);


    return AllInfo;

} 

/////ruta de paises
router.get('/countries', async (req,res) => {
    const name = req.query.name;
    let allCountries= await getAllCountries();

    if (name){
       
       
        let countryName = allCountries.filter(e => e.name.oficial==name || e.name.common==name);
        countryName.length ? 
        res.status(200).send(countryName):
        res.status(404).send(`The Country ${name} don't exist, please try whit another name`)
    }else{res.status(200).send(allCountries)}
})
////ruta de id
router.get('/countries/:id', async (req,res) => {
   
    const id= req.params.id;
    const ID= id.toUpperCase()
    let allCountries= await getAllCountries();

    if (id){
       
        let countryId = allCountries.filter(e => e.cca3===ID || e.id===ID);
        console.log(allCountries[0])
        countryId.length ? 
        res.status(200).send(countryId):
        res.status(404).send(`The code ${id} don't exist, please try whit another code`)
    }
    
console.log(id)
})








 module.exports = router


