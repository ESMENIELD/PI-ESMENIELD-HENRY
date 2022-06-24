import React from "react";

const Activity = ({id, name, duration ,dificulty, season})=>{

    return (
        <div key= {id}>
            <h2>{name}</h2>
            <h3>{duration} hs </h3>
            <h3>{dificulty}/5</h3>
            <h3>{season}</h3>
        </div>
    )
}
export default Activity