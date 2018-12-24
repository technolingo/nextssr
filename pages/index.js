import React from 'react';
import Link from 'next/link';

const indexPage = () => {
  return (
    <div>
      <h1>Index Page</h1>
      <p>Go to <Link href='/auth'><a>Auth</a></Link> to log in.</p>
    </div>
  );
};

export default indexPage;
