import axios from 'axios';

//https://pokeapi.co/api/v2/pokemon/?limit=151

const config = axios.create({
    baseURL: 'https://pokeapi.co/api/v2',

  })

const consulta = {
    pokemon: {
        getPokemons: async () => {
            let pokemones = await config.get('/pokemon/?limit=151')
            .then((res) =>{return res.data.results})
            .catch((error) =>{console.log(error)})
            return pokemones;
        },
    },
}

export default consulta;