import React from 'react';

const styles = {
  width: '100%',
  padding: '10px',
  marginBottom: '20px',
};

const SearchBox = (props) => <input type="text" style={styles} { ...props } />;

export default SearchBox;