
import Slider from './Slider';
import Feature from './Feature';
import Best from './Best';

import { products } from '../data/products';


let Home = () => {
    return (
        <div className="home">
            <Slider />
            <Feature />
            <Best pro={products} />

        </div>
    )
}

export default Home 