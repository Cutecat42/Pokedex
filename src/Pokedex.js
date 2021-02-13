import React from "react";
import Pokecard from "./Pokecard";

const Pokedex = (props) => {
    return (
        <>
            {props.default.map(i => <Pokecard name={i.name} id={i.id} type={i.type} base_exp={i.base_experience}/>)}
        </>
    );
};

export default Pokedex;