import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <div className="container-filter-input">
      <input
        className="filter-input"
        type="text"
        placeholder="Filter contacts"
        onChange={e => dispatch(setFilter(e.target.value))}
      />
    </div>
  );
};

export default Filter;
