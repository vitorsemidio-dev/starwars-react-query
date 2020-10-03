/** @format */

import React, { useState } from 'react';
import { usePaginatedQuery } from 'react-query';

import Planet from './Planet';
import Pagination from './Pagination';

const fetchPlanets = async (key, page) => {
  const res = await fetch(`https://swapi.dev/api/planets/?page=${page}`);
  return res.json();
};

const Planets = () => {
  const [page, setPage] = useState(1);
  const { resolvedData, latestData, status } = usePaginatedQuery(
    ['planets', page],
    fetchPlanets,
  );

  return (
    <div>
      <h2>Planets</h2>

      {status === 'loading' && <div>Loading data</div>}

      {status === 'error' && <div>Error fetching data</div>}

      {status === 'success' && (
        <>
          <Pagination setPage={setPage} page={page} latestData={latestData} />
          <div className='list'>
            {resolvedData.results.map((planet) => (
              <Planet key={planet.name} planet={planet} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Planets;
