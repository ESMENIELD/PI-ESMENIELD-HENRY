import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector} from 'react-redux';
import { getCountries } from "../actions";
import { Link } from "react-router-dom";

export default function Home (){

    const dispatch = useDispatch(); // despacha aciones medante hooks 
    const allCountries= useSelector ((state)=> state.countries);//me trae todo lo que está en en stado de countries
    useEffect (()=>{
        dispatch(getCountries())
    },[])



    return (
        <div>
            <Link to='/activity'>Create Activity</Link>

            <h1>Los Paises re Contentos </h1>
            

        </div>
    )
}