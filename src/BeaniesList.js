import BeanieBaby from './BeanieBaby.js';
import { Link } from 'react-router-dom';

export default function BeaniesList({ beanieBabies }) {
  return (
    <div className='beanies'>{
      beanieBabies.map((beanieBaby, i) =>
        <Link key={beanieBaby.title + i + beanieBaby.id} to={`/beanies/${`/beanieBaby.id`}`}>
          <div className='beanies'>
            <h3>{beanieBaby.title}</h3>
            <p>{beanieBaby.astrosign}</p>
            <img src={beanieBaby.image} />
          </div>
        </Link>)
    }
    </div>);
}
