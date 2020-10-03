/** @format */

import React, { useState } from 'react';
import { usePaginatedQuery } from 'react-query';
import Person from './Person';
import Pagination from './Pagination';

const fetchPeople = async (key, page) => {
  const res = await fetch(`https://swapi.dev/api/people/?page=${page}`);
  return res.json();
};

const People = () => {
  const [page, setPage] = useState(1);
  const { resolvedData, latestData, status } = usePaginatedQuery(
    ['people', page],
    fetchPeople,
  );

  return (
    <div>
      <h2>People</h2>

      {status === 'loading' && <div>Loading data</div>}

      {status === 'error' && <div>Error fetching data</div>}

      {status === 'success' && (
        <>
          <Pagination setPage={setPage} page={page} latestData={latestData} />
          <div className='list'>
            {resolvedData.results.map((person) => (
              <Person key={person.name} person={person} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default People;
