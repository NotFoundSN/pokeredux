//import {StarOutlined} from '@ant-design/icons';
import './PokemonCard.css';

const PokemonCard = ({pokemon}) => {
    let name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
    return (
        <div className='card'>
            <div className='cardTitle'><b className='cardName'>{name}</b><b className='cardNumber'>{pokemon.id.toLocaleString('en-US', {
    minimumIntegerDigits: 3,
    useGrouping: false
  })}</b></div>
            <div className='cardImg'>
                <img src={pokemon.sprites.front_default} alt={pokemon.name} className='pokeImg'/>
            </div>
            <div className='tipos'>
                {pokemon.types.map((tipe)=> {return <div className={`tipo ${tipe.type.name}`} key={`${pokemon.name}-${tipe.type.name}`} ><b>{tipe.type.name}</b></div>})}
            </div>
        </div>
    )
};

export default PokemonCard;