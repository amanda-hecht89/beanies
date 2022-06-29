import { Link } from 'react-router-dom';

export default function BeanieBaby({ title, astrosign, image, id }) {
  return (
    // this should contain a react-router-dom Link to the detail page for this particular beanie baby.
    // it should also render the beanie baby's image and show the beanie baby's name
    <Link to={`/beanies/${id}`}>
      <div className='beanies'>
        <h3>{title}</h3>
        <p>{astrosign}</p>
        <img src={image} height="100" />
      </div>
    </Link>
  );
}
