

const inicialState = {
    countries : []
}


function rootReducer (state= inicialState, action) {

    switch(action.type) {
        case 'GET_COUNTRIES':
            return {
                ...state,
                countries: action.payload
            }
    }

}


export default rootReducer;