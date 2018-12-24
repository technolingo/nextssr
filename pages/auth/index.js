import React from 'react';
import Link from 'next/link';

const authPage = () => {
  return (
    <div>
      <h1>Auth Page</h1>
      <p>Go back to <Link href='/'><a>Home</a></Link>.</p>
    </div>
  );
};

export default authPage;
