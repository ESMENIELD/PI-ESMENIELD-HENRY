import React from "react";
import {useSelector} from 'react-redux';
import Activity from './Activity'




const Activities = () => {
 
  
  const allActivities= useSelector((state)=> state.activities)
  
 
 
 
  return ( 
      <div >
    
        {allActivities?.map(e =>{
            return(

                <Activity name= {e.name} duration={e.duration} dificulty={e.dificulty} season={e.season}/>

            )
        }
        )}
          
        
      
    </div>
  );
};

export default Activities;