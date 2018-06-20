import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Header } from 'semantic-ui-react';


class Home extends Component {
  render() {
    return (
      <div>
        <Header as='h1' textAlign='center'>Posts</Header>
        <Link to='/posts'>View All Posts</Link>
      </div>
    );
  }
}

export default Home;
