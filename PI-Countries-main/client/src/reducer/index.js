

const inicialState = {
    countries : [],
    allCountries: []
}


const rootReducer = (state= inicialState, action) => {

    switch(action.type) {
        case 'GET_COUNTRIES':
            return {
                ...state,
                countries: action.payload,
                allCountries: action.payload
            }
        case 'FILTER_BY_CONTINENT':
            const allcountries= state.allCountries;
            const continentFilter = action.payload === 'All'? allcountries : allcountries.filter(e=> e.continent === action.payload)
            return{
                ...state,
                countries: continentFilter
            } 
            
        case 'FILTER_BY_ACTIVITY':
            
        
        const filtro= state.allCountries.map(coun => coun.activities.some(act => 
        act.name === action.payload 
        ))

        return {
            ...state,
            countries: filtro
        }
        default:
            return state;
    }

}


export default rootReducer;