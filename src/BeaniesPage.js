import { useEffect, useState } from 'react';
import './App.css';
import { getBeanieBabies } from './services/fetch-utils';
import BeaniesList from './BeaniesList';
import Pagination from './Pagination';

function App() {
  const [beanieBabies, setBeanieBabies] = useState([]);
  const [page, setPage] = useState(1);
  const perPage = 40;
  
  useEffect(() => {
    async function fetch() {
      const from = page * perPage - perPage;
      const to = page * perPage;
      const beanies = await getBeanieBabies(from, to);

      setBeanieBabies(beanies);
    }

    fetch();
  }, [page]); // what can you do with this array to trigger a fetch every time the page changes?


  return (
    <Pagination
      <h2>Current Page {page}</h2>
      <div className='buttons'>
        <button>Previous Page={page}</button>
        <button >Next Page={setPage}</button> 
      </div>
    />  
    <BeaniesList beanieBabies={beanieBabies} />
  );
}

export default App;
