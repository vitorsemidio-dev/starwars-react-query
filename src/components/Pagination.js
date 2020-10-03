/** @format */

import React from 'react';

const Pagination = ({ setPage, page, latestData }) => {
  return (
    <div className='pagination-container'>
      <button
        onClick={() => setPage((old) => Math.max(old - 1, 1))}
        disabled={page === 1}>
        Previous Page
      </button>
      <span>{page}</span>
      <button
        onClick={() =>
          setPage((old) => (!latestData || !latestData.next ? old : old + 1))
        }
        disabled={!latestData || !latestData.next}>
        Next page
      </button>
    </div>
  );
};

export default Pagination;
