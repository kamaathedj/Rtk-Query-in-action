//import React from 'react';
import {useFetchPrisonersQuery} from './prisoner-api-slice';

export const Prisoner = () => {
    const {data}  = useFetchPrisonersQuery();
  return <div>
    <h3>prisoner</h3>
    {
        data?.map((d)=>(
          <>
            <h3 key = {d.id}>{d.name}</h3>
            <h5>{d.duties}</h5>
            <h4>{d.prisonedWhen}</h4>
            </>
        ))
    }
  </div>;
};


export default Prisoner;

