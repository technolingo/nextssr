import React, { Component } from 'react';
import Link from 'next/link';

class IndexPage extends Component {
  static async getInitialProps (context) {
    // will run on the server and client
    // e.g. fetch data from database
    // and pre-populate the app prior to rendering
    // use await to wait for promise results
    return {appName: 'Async-App-Name'};
  }

  render () {
    return (
      <div>
        <h1>Index Page - {this.props.appName}</h1>
        <p>Go to <Link href='/auth'><a>Auth</a></Link> to log in.</p>
        <p>Or go to <Link href='/profile'><a>Profile</a></Link>.</p>
      </div>
    );
  }
}

export default IndexPage;
