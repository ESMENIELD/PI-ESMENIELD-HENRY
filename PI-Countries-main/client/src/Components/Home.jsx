import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector} from 'react-redux';
import { getCountries, filterCountriesByContinent, filterByAvtivities } from "../actions";
import { Link } from "react-router-dom";
import Country from './Country';
import Paginado from "./Paginado"; 
import SearchBar from "./SearchBar";

export default function Home (){

    const dispatch = useDispatch(); // despacha aciones medante hooks 
    const allCountries= useSelector ((state)=> state.countries);//me trae todo lo que está en en stado de countries
    const [currentPage, setCurrentPage] = useState(1);
    const [countriesPerPage]= useState(10);
    const indexLastCountry =  currentPage===1 ? 9 : currentPage * countriesPerPage;
    const indexFirstCountry = currentPage===1 ? 0 : indexLastCountry - countriesPerPage;
    const currentCountry= allCountries.slice(indexFirstCountry, indexLastCountry);


  const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }



    useEffect (()=>{
        dispatch(getCountries());
    
        
    },[dispatch])

 

   function handleClick(e){//funcion para manejar el dispach en el boton reload
       e.preventDefault();
       dispatch(getCountries());
   }
   function handleFilterContinent(e) {
       
       dispatch(filterCountriesByContinent(e.target.value));
   }
   function handleFilterActivity (e){
    dispatch(filterByAvtivities(e.target.value))
   }

 
return (
        <div>
            
            <Link to='/activity'>Create Activity</Link>

            <h1>Los Paises re Contentos </h1>

            <button onClick={e => {handleClick(e)}}>
                Reload all countries
            </button>
            <div>
                <SearchBar/>
                <select >
                    <option value="asc">ascendente</option>
                    <option value="des">descendente</option>
                </select>
                <select onChange={e=> handleFilterContinent(e)}>
                    
                    <option value="">Filter by Continent</option>
                    <option value="Europe">Europe</option>
                    <option value="Asia">Asia</option>
                    <option value="Oceania">Oceania</option>
                    <option value="Antarctic">Antarctic</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">Americas</option>
                </select>
                <select onChange={e=> handleFilterActivity(e)}>
                    
                {allCountries.map(e => e.activities && e.activities.map(e=>
                {
                    
                    return(
                        
                        <option value={e.name}>{e.name}</option>
                    )}) )
                }
                </select>

                        
                 
                    

                
                 <Paginado countriesPerPage={countriesPerPage} allCountries= {allCountries.length} paginado= {paginado}/>
                  
            {currentCountry?.map(e => {
               return(
                 <Country id= {e.id} name= {e.name} flag= {e.flag} continent= {e.continent}/>
            )
            })}
 
            </div>
            

        </div>
    )
}