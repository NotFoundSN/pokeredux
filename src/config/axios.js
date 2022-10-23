import axios from 'axios';

//https://pokeapi.co/api/v2/pokemon/?limit=151

const config = axios.create({
    baseURL: 'https://pokeapi.co/api/v2',

})

// G2 pokemon?limit=100&offset=151
// G3 pokemon?limit=135&offset=251
// G4 pokemon?limit=135&offset=386
// G5 pokemon?limit=156&offset=521
// G6 pokemon?limit=72&offset=677
// G7 pokemon?limit=88&offset=749
// G8

const consulta = {
    pokemon: {
        getPokemons: async (generation) => {
            let link = '/pokemon/'
            switch (generation) {
                case 1:
                    link += '?limit=151'
                    break;
                case 2:
                    link += '?limit=100&offset=151'
                    break;
                case 3:
                    link += '?limit=135&offset=251'
                    break;
                case 4:
                    link += '?limit=135&offset=386'
                    break;
                case 5:
                    link += '?limit=156&offset=521'
                    break;
                case 6:
                    link += '?limit=72&offset=677'
                    break;
                case 7:
                    link += '?limit=88&offset=749'
                    break;
                default:
                    link += '?limit=151'
                    break;
            }
            let pokemones = await config.get(link)
                .then((res) => { return res.data.results })
                .catch((error) => { console.log(error) })
            return pokemones;
        },
        getDetail: async (pokemon) => {
            let link = pokemon.url.slice(25);
            let pokeDetail = await config.get(link)
                .then((res) => { return res.data })
                .catch((error) => { console.log(error) })
            return pokeDetail;
        }
    },
}

export default consulta;