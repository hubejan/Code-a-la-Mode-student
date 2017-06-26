import React from 'react';

const CodeView = ({ code }) => (
  <div>
      <h3>Sourcecode:</h3>
      <p>{code.source}</p>
  </div>
);

export default CodeView;
