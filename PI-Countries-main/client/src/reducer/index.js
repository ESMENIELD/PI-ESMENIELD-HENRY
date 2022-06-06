

const inicialState = {
    countries : [],
    allCountries: [],
    activities: [],
    allActivities:[]
}


const rootReducer = (state= inicialState, action) => {

    switch(action.type) {
        case 'GET_COUNTRIES':
            return {
                ...state,
                countries: action.payload,
                allCountries: action.payload
            }

        case 'GET_ACTIVITIES':
            return {
                ...state,
                activities: action.payload,
            }    
        case 'FILTER_BY_CONTINENT':
            const allcountries= state.allCountries;
            const continentFilter = allcountries.filter(e=> e.continent === action.payload)
            return{
                ...state,
                countries: continentFilter
            } 
            
        case 'FILTER_BY_ACTIVITY':
            
        
        const filterAct= state.allCountries.filter(e=> e.activities && e.activities.map(c=>c.name).includes(action.payload))

        return {
            ...state,
            countries: filterAct
        }
        case 'FILTER_ACT_BY_ID':
            
        const filterId = state.activities.filter(e => e.countries_activities && e.countries_activities.map(c=> c.countryId).includes(action.payload));

        return {
            ...state,
            activities: filterId
        }    
        default:
            return state;
    }

}


export default rootReducer;