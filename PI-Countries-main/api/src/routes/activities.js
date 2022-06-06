const {Country, Activity} = require('../db')
const { Router } = require('express');



const axios = require ('axios')

const router = Router();


router.post('/activity', async (req, res) =>{
    let {countryId,
         name,
        dificulty,
        duration,
        season 
    } = req.body;

    const activityCreated = await Activity.create({
        name: name,
        dificulty: dificulty,
        duration: duration,
        season: season
    });  
    
    const matchCountry = await Country.findAll({
        where: {id: countryId}
    });

    activityCreated.addCountries(matchCountry)

    res.send('activity created successfully')


}) 
router.get('/activities', async (req,res)=> {

    const getActivities= await Activity.findAll({incluide:{model: Country, attributes: ['id','name']}})
    getActivities.length ?
    res.status(200).send(getActivities):
    res.status(404).send('no hay actividades creadas aun')

})


router.get('/activities/:id', async (req,res)=> {
    //const id = req.params.id
    //const getActivities= await Activity.findAll({incluide:{model: Country, attributes: id]}})
    ////const filterById= getActivities.map(c=> c.countries)
    //res.status(200).send(getActivities):
    //res.status(404).send('no hay actividades creadas aun')

})

module.exports = router