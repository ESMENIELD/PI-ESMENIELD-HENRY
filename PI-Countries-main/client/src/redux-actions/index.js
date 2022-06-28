import axios from 'axios';


export function getCountries () {
    
    return async function (dispatch){
        var json = await axios.get("http://localhost:3001/countries");
        return dispatch({type: 'GET_COUNTRIES', payload: json.data});

    }

};

export function getCountriesById (id) {

    return async function (dispatch){
        var json = await axios.get(`http://localhost:3001/countries/${id}`);
        return dispatch({type: 'GET_DETAIL', payload: json.data});

    }

};

export function filterCountriesByContinent (payload) {

    return ({
      type:'FILTER_BY_CONTINENT',
      payload 
       });
};

export function filterByAvtivities (payload) {
    return ({
        type:'FILTER_BY_ACT',
        payload 
         });

 };

export function getName(name) {
    return async (dispatch) =>{
        var json= await axios.get(`http://localhost:3001/countries?name=${name}`);
        return dispatch({type:'GET_NAME', payload: json.data})
    }
}


export function getActivities () {

    
    return async function (dispatch){
        var json = await axios.get("http://localhost:3001/activities");
        return dispatch({type: 'GET_ACTIVITIES', payload: json.data});

    }

}


   


