import React from 'react';
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import {getPosts} from '../reducers/posts'
import {
  Card,
  Header,
  Button,
  Divider,
  Container
}from 'semantic-ui-react'
import PostForm from './PostForm'




class Posts extends React.Component{

  state = { showForm: false }

  toggleForm = () => {
      this.setState({ showForm: !this.state.showForm })
  }


  componentDidMount() {
    this.props.dispatch( getPosts() )
  }



posts = () => {
  return this.props.posts.map( post => {
    // return <post key={post.id} {...post} />
    return(
      
      <Card>
        <Card.Content>
          {post.body}
        </Card.Content>
      </Card>
    )
  })
}

render () {
  const {showForm} = this.state
  return (
    <Container>
    <Header as="h1" textAlign="center">
      Posts
    </Header>
    <Button color="green" onClick={this.toggleForm}>Add</Button>
    <Divider />
    {showForm ? 
      <PostForm toggleForm={this.toggleForm} />
      : null }
      <Card.Group itemsPerRow={3}>
        { this.posts() }
      </Card.Group>
   
    </Container>
  )
}

  




} 
 const mapStateToProps = (state) => {
   const { posts } = state
    return {posts: posts}
  }
export default connect(mapStateToProps)(Posts)
