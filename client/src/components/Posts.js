import React from 'react';
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import {getPosts} from '../reducers/posts'
import {
  Card
}from 'semantic-ui-react'




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

render (){
  return(
    <Card.Group itemsPerRow={4}>
       {this.posts()} 
    </Card.Group>
  )
}





} 
 const mapStateToProps = (state) => {
   const { posts } = state
    return {posts: posts}
  }
export default connect(mapStateToProps)(Posts)
