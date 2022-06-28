const { Country, Activity } = require('../db')
const { Router } = require('express');
const router = Router();


router.post('/activity', async (req, res, next) => {
    let { countries,
        name,
        difficulty,
        duration,
        season
    } = req.body;

    try {
        const activityCreated = await Activity.create({
            name: name,
            difficulty: difficulty,
            duration: duration,
            season: season
        });
        countries.map(async id => {
            const matchCountry = await Country.findOne({
                where: { id: id }
            });

            await activityCreated.addCountries(matchCountry)
        });

        res.send('activity created successfully')
    }

    catch (error) {
        next(error)
    }

})

router.get('/activities', async (req,res)=> {

    const getActivities= await Activity.findAll()
    console.log(getActivities)

    getActivities.length ?
    res.status(200).send(getActivities):
    res.status(404).send('no hay actividades creadas aun')

})


// router.get('/activities/:id', async (req,res)=> {
//     const id = req.params.id  
//     const getActivities = await Country.findOne({include: Activity, where:{id: id }});
//    // const filter= getActivities.map(el=>el.countries.filter(e=> e.id===id))
//     console.log(getActivities)
//     getActivities?
//     res.status(200).send(getActivities): 
//     res.status(404).send('no hay actividades creadas aun')

// })

module.exports = router