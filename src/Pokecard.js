import React from "react";

const Pokecard = (props) => {
    const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`;
    return (
        <div className = "Pokecard">
            <h4 className="Pokecard-name">{props.name}</h4>
            <img src={img}/>
            <p>Type: {props.type}</p>
            <p>EXP: {props.base_exp}</p>
        </div>
    );
};

export default Pokecard;