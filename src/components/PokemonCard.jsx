//import {StarOutlined} from '@ant-design/icons';
import './PokemonCard.css';

const PokemonCard = ({ pokemon }) => {
    const name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
    const traductType = (tipe) => {
        let tipo;
        switch (tipe) {
            case 'bug':
                tipo = 'bicho';
                break;
            case 'dragon':
                tipo = 'dragon';
                break;
            case 'electric':
                tipo = 'electrico';
                break;
            case 'fairy':
                tipo = 'hada';
                break;
            case 'fighting':
                tipo = 'lucha';
                break;
            case 'fire':
                tipo = 'fuego';
                break;
            case 'flying':
                tipo = 'volador';
                break;
            case 'ghost':
                tipo = 'fantasma';
                break;
            case 'grass':
                tipo = 'planta';
                break;
            case 'ground':
                tipo = 'tierra';
                break;
            case 'ice':
                tipo = 'hielo';
                break;
            case 'normal':
                tipo = 'normal';
                break;
            case 'poison':
                tipo = 'veneno';
                break;
            case 'psychic':
                tipo = 'psiquico';
                break;
            case 'rock':
                tipo = 'roca';
                break;
            case 'dark':
                tipo = 'siniestro';
                break;
            case 'steel':
                tipo = 'acero';
                break;
            case 'water':
                tipo = 'agua';
                break;
        }
        return tipo;
    }
    return (
        <div className='card'>
            <div className='cardTitle'><b className='cardName'>{name}</b><b className='cardNumber'>{pokemon.id.toLocaleString('en-US', {
                minimumIntegerDigits: 3,
                useGrouping: false
            })}</b></div>
            <div className='cardImg'>
                <img src={pokemon.sprites.front_default} alt={pokemon.name} className='pokeImg' />
            </div>
            <div className='tipos'>
                {pokemon.types.map((tipe) => { return <div className={`tipo ${tipe.type.name}`} key={`${pokemon.name}-${tipe.type.name}`} ><b>{traductType( tipe.type.name)}</b></div> })}
            </div>
        </div>
    )
};

export default PokemonCard;