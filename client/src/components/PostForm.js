
import React from 'react'
import { connect } from 'react-redux'
import { Form } from 'semantic-ui-react'
import { updatePost, addPost } from '../reducers/posts'

class PostForm extends React.Component {
  initialState = {
    body: ''
  }

  state = {...this.initialState}

  componentDidMount() {
    if (this.props.id)
      this.setState({ ...this.props })
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const post = this.state
    const { toggleForm, dispatch } = this.props
    const option = this.props.id ? updatePost : addPost
    dispatch(option(post))
    this.setState({...this.initialState})
    toggleForm()
  }

  render() {
    const { body } = this.props
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          name="body"
          required
          defaultValue={body}
          onChange={this.handleChange}
          label="body"
        />
        <Form.Button>Save</Form.Button>
        <br />
      </Form>
    )
  }
}

export default connect()(PostForm)