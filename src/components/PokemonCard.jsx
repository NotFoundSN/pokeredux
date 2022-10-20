import {Card} from 'antd';
import Meta from 'antd/lib/card/Meta';
import {StarOutlined} from '@ant-design/icons';

const PokemonCard = ({name}) => {
    return (<Card title={name} cover={<img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png' alt={name} extra={<StarOutlined/>} />}>
        <Meta description='normal, hada'/>
    </Card>);
};

export default PokemonCard;