import React from 'react';

export default function Pagination({
  currentPage, lastPage, setCurrentPage,
}) {
  return (
    <div>
      <p>Current Page: {currentPage + 1}</p>
      <button disabled={currentPage <= 0} onClick={() => setCurrentPage(currentPage - 1)}>Previous Page</button>
      <button disabled={currentPage >= lastPage} onClick={() => setCurrentPage(currentPage + 1)}>Next Page</button>
    </div>
  );
}
