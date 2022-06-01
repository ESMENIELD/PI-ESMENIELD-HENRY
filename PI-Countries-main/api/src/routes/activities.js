const {Country, Activity} = require('../db')
const { Router } = require('express');



const axios = require ('axios')

const router = Router();


router.post('/activity', async (req, res) =>{
    let {countryId,
         name,
        dificult,
        duration,
        season 
    } = req.body;

    const activityCreated = await Activity.create({
        name: name,
        dificult: dificult,
        duration: duration,
        season: season
    });
    
    const matchCountry = await Country.findAll({
        where: {id: countryId}
    });

    activityCreated.addCountries(matchCountry)

    res.send('activity created successfully')


})

module.exports = router