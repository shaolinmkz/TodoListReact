import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddTodo extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: ''
    }
  }
  
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.title !== '') {
      this.props.addTodo(this.state.title);
      this.setState({ title: '' });
    } else {
      alert("Please enter a Todo-Title!")
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} style={{ display: 'flex' }}>
          <input 
          type="text" 
          name="title" 
          placeholder="Add Todo..."
          value = {this.state.title}
          onChange = {this.handleChange}
            style={{ flex: '10', padding: '5px' }}
           />

          <input
            type="submit"
            value="Add"
            className="btn"
            style={{ flex: '1' }}
            />          
        </form>
      </div>
    )
  }
}

// PropType (a kind of validation of some sort)
AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default AddTodo
