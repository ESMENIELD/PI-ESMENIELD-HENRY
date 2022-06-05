import React from "react";

export default function Paginado ({countriesPerPage, allCountries, paginado }) {

    const pageNumbers =[];

    for (let i=1; i<=Math.ceil(allCountries/countriesPerPage); i++ ){
        pageNumbers.push(i)
    }
    
    return(
        <nav>
            {console.log(pageNumbers)}
            <ul className="paginado">
                { 
                    pageNumbers && pageNumbers.map(number=> {
                        return(
                        <li className="number" key={number}>
                        <button onClick={() => paginado(number)}>{number}</button>
                        </li>
                        )
                    })
                    
                }
            </ul>

        </nav>
    )
}