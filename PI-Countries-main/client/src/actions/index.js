import axios from 'axios';


export function getCountries () {

    
    return async function (dispatch){
        var json = await axios.get("http://localhost:3001/countries");
        return dispatch({type: 'GET_COUNTRIES', payload: json.data});

    }

}

export function filterCountriesByContinent (payload) {

    return ({
      type:'FILTER_BY_CONTINENT',
       payload 
       });
}
export function filterCountriesByActivity (payload) {

    return ({
      type:'FILTER_BY_ACTIVITY',
       payload 
       });
}