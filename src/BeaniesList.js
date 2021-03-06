import BeanieBaby from './BeanieBaby.js';


export default function BeaniesList({ beanieBabies }) {
  return (
    <div className='beanies'>
      {
        beanieBabies.map((beanieBaby, i) => <BeanieBaby key={beanieBaby.title + i} {...beanieBaby} />)
      }
    </div>);
}
