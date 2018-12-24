import React from 'react';
import Link from 'next/link';

const errorPage = () => (
  <div>
    <h2>Something went wrong... :(</h2>
    <p>Try <Link href='/'><a>going back</a></Link>.</p>
  </div>
);

export default errorPage;
