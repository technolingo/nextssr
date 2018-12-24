import React from 'react';
import Router from 'next/router';

const authPage = props => {
  return (
    <div>
      <h1>Auth Page - {props.asyncData}</h1>
      <button onClick={() => Router.push('/')}>Go back</button>
    </div>
  );
};

authPage.getInitialProps = context => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({asyncData: 'Hello World!'});
    }, 1000);
  });
  return promise;
};

export default authPage;
