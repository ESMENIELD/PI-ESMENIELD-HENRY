import React from "react";
//import { Link } from "react-router-dom";
const Detail = ({id, subregion, population, area, capital}) => {
    return (
        <div>
            <h2>"DETALLE"</h2>
            <h2>Code:{id}</h2>
            <h2>subregion:{subregion}</h2>
            <h2>Capital:{capital}</h2>
            <h2>Area:{area}</h2>
            <h2>Population:{population}</h2>
            

        </div>
    )
}
export default Detail