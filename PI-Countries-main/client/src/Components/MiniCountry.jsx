import React from "react";
import Activity from "./Activity";



const MiniCountry = ({ flag, name, continent, activities, id}) => {


 
 
  return (
      <div key={id}>
    
      
          <h2 >{name}</h2>
          <div key={id}>
            <img src={flag} alt="flag img"/>
          </div>
          <h3>{continent}</h3>

          {activities?.map(e=>{
            return(
                <Activity key={e.id} name= {e.name} duration={e.duration} dificulty={e.dificulty} season={e.season}/>
            )
        
             

          })
          }
          
        
      
    </div>
  );
};

export default MiniCountry;