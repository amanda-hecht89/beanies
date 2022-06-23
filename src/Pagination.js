import React from 'react';

export default function Pagination({
  currentPage, setCurrentPage,
}) {
  return (
    <div>
      <p>Current Page: {currentPage + 1}</p>
      <button disabled={currentPage <= 0} onClick={() => setCurrentPage(currentPage - 1)}>Previous Page</button>
      <button onClick={() => setCurrentPage(currentPage + 1)}>Next Page</button>
    </div>
  );
}


//edit commit for netifly//
//disabled={currentPage >= lastPage} //
