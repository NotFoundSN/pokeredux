import {Card} from 'antd';
import {StarOutlined} from '@ant-design/icons';
import './PokemonCard.css';

const atributo = ['normal', 'hada','acero'];
const PokemonCard = ({name, image, types}) => {
    return (<Card title={name} cover={<img src={image} alt={name} extra={<StarOutlined/>} />}>
        <div className='tipos'>
            {types.map((tipe)=> {return <div className={`tipo ${tipe.type.name}`} key={`${name}-${tipe.type.name}`} >{tipe.type.name}</div>})}
        </div>
    </Card>);
};

export default PokemonCard;