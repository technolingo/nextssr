import React from 'react';
import Link from 'next/link';

import User from '../../components/User';

const profile = () => (
  <div>
    <h1>My Profile</h1>
    <User name='Freeheart' age={26} />
    <p><Link href='/'><a>Home</a></Link></p>
  </div>
);

export default profile;
