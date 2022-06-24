
const {Country, Activity} = require('../db')
const { Sequelize } = require("sequelize");
const Op = Sequelize.Op;



const axios = require ('axios')


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

    const eachAllCountries= await apiInfo.forEach(e => {
        Country.findOrCreate({
            where : {  id : e.id, name: e.name, flag: e.flag, continent: e.continent}
        })

    });
 
}

const getCountriesFromDb= async () =>{
    await LoadInBd();
    return await Country.findAll({include: Activity})
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



const getApiInfo= async () => { //función que me trae todos los datos y es asiconcrónica para darle tiempo a la respuesta de la Api.
       
    const apiUrl = await axios.get('https://restcountries.com/v3/all');
    const apiInfo = await apiUrl.data.map(e =>{
        return {
            id: e.cca3,
            subregion: e.subregion,
            capital: e.capital,
            area: e.area,
            population: e.population

        }

        
    });
  
    return apiInfo;
}


module.exports= {
    getApiInfo,
    getName,
    getCountriesFromDb
}
