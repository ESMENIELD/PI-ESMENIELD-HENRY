import React from "react";

import { Link } from "react-router-dom";

const Country = ({ flag, name, continent, id }) => {
  return (
      <div >
    
      
          <h2 >{name}</h2>
          <div >
            <img src={flag} alt="flag img"/>
          </div>
          <h3>{continent}</h3>
          
        
      
    </div>
  );
};

export default Country;