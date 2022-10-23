import React, { useEffect, useState } from 'react';
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
  const [gen, setGen] = useState(1);
  const selectGen = () => {
    if (document.getElementById('selectG')) {
      //console.log(document.getElementById('selectG').value)
      setGen(document.getElementById('selectG').value);
    }
  }
  useEffect(() => {
    const fetchPokemonos = async () => {
      const lista = await api.pokemon.getPokemons(parseInt(gen));
      let pokemonDetaileds = await Promise.all(lista.map(pokemon => api.pokemon.getDetail(pokemon)))
      dispatch(setPokemons(pokemonDetaileds))
    }
    fetchPokemonos();
  }, [gen])

  return (
    <div className="App">
      <Row justify='center' className='Espacios'>
        <Col xs={22} sm={16} md={12}><img className='logo' src={logo} alt='pokeredux' /></Col>
      </Row>
      <Row justify='center' className='Espacios'>
        <Col xs={22} sm={16} md={12}><Searcher /></Col>
      </Row>
      <Row justify='center' className='Espacios'>
        <Col xs={22} sm={16} md={12}>
          <div className='select'>
          <select className="select" id='selectG' onChange={selectGen}>
            <option value='1' >Generacion 1</option>
            <option value='2' >Generacion 2</option>
            <option value='3' >Generacion 3</option>
            <option value='4' >Generacion 4</option>
            <option value='5' >Generacion 5</option>
            <option value='6' >Generacion 6</option>
            <option value='7' >Generacion 7</option>
          </select>
          </div>
        </Col>
      </Row>
      <Row justify='center' className='Espacios'>
        <PokemonList pokemons={pokemons} />
      </Row>
    </div>
  );
}

export default App;
