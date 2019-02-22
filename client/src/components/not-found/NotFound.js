import React from 'react';
import giph from './giphy.gif';
export default () => {
  return (
    <div><center>
      <h1 className="display-2">OOPS...</h1>
      <h3>Page Not Found</h3>
      </center>
      <img
        src={giph}
        style={{ width: '700px', margin: 'auto', display: 'block' }}
        alt="Cannot Find Profile"
      />
    </div>
  );
};
