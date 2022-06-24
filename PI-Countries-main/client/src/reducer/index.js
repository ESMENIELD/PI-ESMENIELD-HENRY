const inicialState = {
  countries: [],
  allCountries: [],
  activities: [],
  countryDetail: [],
};

const rootReducer = (state = inicialState, action) => {
  switch (action.type) {
    case "GET_COUNTRIES":
      return {
        ...state,
        countries: action.payload,
        allCountries: action.payload,
      };

    case "GET_DETAIL":
      return {
        ...state,
        countryDetail: action.payload,
      };

    case "FILTER_BY_CONTINENT":
      const allcountries = state.allCountries;
      const continentFilter = allcountries.filter(
        (e) => e.continent === action.payload
      );

      return {
        ...state,
        countries: continentFilter,
      };

    case "FILTER_BY_ACT":
      const countries = state.allCountries;
      const activitiesFilter = countries.filter((e) => 
      e.activities && e.activities.map((c) => 
      c.name).includes(action.payload));
      console.log(activitiesFilter)

      return {
        ...state,
        countries: activitiesFilter,
      };
     
    case "GET_NAME":
        return {
          ...state,
          countries: action.payload,
        };  

      

    default:
      return state;
  }
};

export default rootReducer;
