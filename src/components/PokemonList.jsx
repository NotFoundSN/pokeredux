import React from "react";
import { connect } from 'react-redux';
import { Col} from 'antd';
import PokemonCard from "./PokemonCard";


const PokemonList = ({pokemons}) => {
    return (
        <React.Fragment>
                {pokemons.map((pokemon) => { 
                    //console.log(pokemon);
                    return <Col xs={22} sm={11} md={7} lg={5} key={`${pokemon.name}-col`}><PokemonCard name={pokemon.name} key={`${pokemon.name}-card`}/></Col> 
                    })}
        </React.Fragment>
    );
};

PokemonList.defaultProps = {
    pokemons: Array(10).fill('')
}

export default PokemonList;