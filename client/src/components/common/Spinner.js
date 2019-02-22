import React from 'react';
import spinner from './spinner.gif';

export default () => {
  return (
    <div>
      <center>
      <h1 className="display-4">loading...</h1>
      
      </center>
      <img
        src={spinner}
        style={{ width: '500px', margin: 'auto', display: 'block' }}
        alt="Loading..."
      />
    </div>
  );
};
