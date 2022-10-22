import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPokemons } from './actions';

import './App.css';
import 'antd/dist/antd.min.css';
//import 'antd/dist/antd.css'

import { Col, Row } from 'antd';
import api from './config/axios';

import logo from './static/pokeredux.png';
import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';

function App() {
  const pokemons = useSelector(state => state.pokemons);
  const dispatch = useDispatch();
  //console.log(pokemons);
  useEffect(() => {
    const fetchPokemonos = async () => {
      const lista = await api.pokemon.getPokemons();
      let pokemonDetaileds = await Promise.all(lista.map(pokemon => api.pokemon.getDetail(pokemon)))
      dispatch(setPokemons(pokemonDetaileds))
    }

    fetchPokemonos();
  }, [])

  return (
    <div className="App">
      <Row justify='center' gutter={[8, 8]} className='Espacios'>
        <Col xs={22} sm={16} md={12}><img className='logo' src={logo} alt='pokeredux' /></Col>
      </Row>
      <Row justify='center' gutter={[8, 8]} className='Espacios'>
        <Col xs={22} sm={16} md={12}><Searcher /></Col>
      </Row>
      <Row justify='center' gutter={[10, 10]} className='Espacios'>
        <PokemonList pokemons={pokemons} />
      </Row>
    </div>
  );
}

export default App;
