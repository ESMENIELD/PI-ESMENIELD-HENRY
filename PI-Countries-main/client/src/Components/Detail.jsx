import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { getCountriesById, getCountries } from "../redux-actions/index";
import MiniCountry from "./MiniCountry";

const Detail = () => {

  const countryDetail = useSelector((state) => state.countryDetail);
  const countries = useSelector((state) => state.countries)
  const dispatch = useDispatch();

  let { id } = useParams();

  useEffect(() => {
    dispatch(getCountriesById(id));
  }, [id]);

  useEffect(() => {
    dispatch(getCountries())
  }, [dispatch])

  const countryfilter = countries.filter(e => e.id === id)


  console.log(countryfilter)


  return (

    <div>
      {countryDetail.map(e => {

        return (
          <div key={e.id}>
            <h2>"DETALLE"</h2>
            <h2>Code:{e.id}</h2>
            <h2>subregion:{e.subregion}</h2>
            <h2>Capital:{e.capital}</h2>
            <h2>Area:{e.area}</h2>
            <h2>Population:{e.population}</h2>
          </div>
        )

      })
      }

      {countryfilter?.map(e => {
        return (
          <MiniCountry key={e.id} name={e.name} flag={e.flag} continent={e.continent} activities={e.activities} />
        )
      })
      }


    </div>
  )
}
export default Detail