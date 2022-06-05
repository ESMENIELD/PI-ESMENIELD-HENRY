
const {Country, Activity} = require('../db')
const { Router } = require('express');
const { Sequelize } = require("sequelize");
const Op = Sequelize.Op;



const axios = require ('axios')

const router = Router();

const LoadInBd =  async () => { //función que me trae todos los datos y es asiconcrónica para darle tiempo a la respuesta de la Api.
       
    const apiUrl = await axios.get('https://restcountries.com/v3/all');
    const apiInfo = await apiUrl.data.map(e =>{
        return {
            id: e.cca3,
            name: e.name.common,
            flag: e.flags[0],
            continent: e.region
        
        }  
    });

    let eachAllCountries= await apiInfo.forEach(e => {
        Country.findOrCreate({
            where : {  id : e.id, name: e.name, flag: e.flag, continent: e.continent}
        })

    });
    
}

const getCountriesByBd = async () => {
    return await Country.findAll({ include: Activity})
}

const getName = async (name) => {
    return  await Country.findAll({
        where: {
          name: {
            [Op.iLike]: `%${name}%`
          },
        },
         include: Activity
      })
}



const getAllFromApi= async () => { //función que me trae todos los datos y es asiconcrónica para darle tiempo a la respuesta de la Api.
       
    const apiUrl = await axios.get('https://restcountries.com/v3/all');
    const apiInfo = await apiUrl.data.map(e =>{
        return {
            id: e.cca3,   //asi se llama la propiedad que provee el id en la api
            subregion: e.subregion,
            capital: e.capital,
            area: e.area,
            population: e.population

        }

        
    });
    
    return apiInfo;
}

const getDbInfo = async () => {
    // función que tre la info de la base de datos actividades que hayan sido creadas
    // asociadas a cada pais
    //tambien asíncrona.
   return await Country.findAll({include:{
       model: Activity,
       attributes: ['name', 'dificult', 'duration', 'season']
    

   }
    });
    

};

const getAllCountries = async () => { //función que concatena los datos de la api y la base de datos.

    const apiInfo= await getAllFromApi();
    const dbInfo= await getDbInfo();
   
    const AllInfo= apiInfo.concat(dbInfo);
    console.log(AllInfo[0])

//console.log(AllInfo)
    return AllInfo;

} 

/////ruta de paises, si no le llega un nombre por query, trae todos los paises 
router.get('/countries', async (req,res) => {
    const name = req.query.name;
    let load = await LoadInBd()
    let allCountries= await getCountriesByBd();
    console.log(allCountries[0])

   ;
   
    if (name){
       
        //console.log(allCountries[0])
        let countryName = await getName(name) ;
        countryName.length ? 
        res.status(200).send(countryName):
        res.status(404).send(`The Country "${name}" don't exist, please try whit another name`)
    }else{res.status(200).send(allCountries)}

})



//ruta de id 
router.get('/countries/:id', async (req,res) => {
   
    const id= req.params.id;
    const ID= id.toUpperCase()
    let allCountries= await getAllCountries();
   
    if (id){
       
        let countryId = allCountries.filter(e => e.cca3===ID || e.id===ID);
        //console.log(allCountries[0])
        countryId.length ? 
        res.status(200).send(countryId):
        res.status(404).send(`The code "${id}" don't exist, please try whit another code`)
    }
    
//console.log(id)
})








 module.exports = router


