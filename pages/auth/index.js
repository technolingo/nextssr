import React from 'react';
import Router from 'next/router';

const authPage = () => {
  return (
    <div>
      <h1>Auth Page</h1>
      <button onClick={() => Router.push('/')}>Go back</button>
    </div>
  );
};

export default authPage;
