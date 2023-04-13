import { Divider, Input } from 'antd';
import React from 'react';

// Iteration 5
function Search({ handleInputChange, searchKeyword }) {
  return (
    <>
      <Divider>Search</Divider>

      <label htmlFor="search-keyword">Search</label>
      <Input
        value={searchKeyword}
        type="text"
        onChange={handleInputChange}
        style={{ width: '50%' }}
      />
    </>
  );
}

export default Search;
