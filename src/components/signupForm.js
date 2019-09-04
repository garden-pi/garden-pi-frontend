import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import * as actions from '../actions/actions'
import '../css/signupForm.css';


class SignupForm extends Component {

  state = {
    name: '',
    email: '',
    password: '',
    matching_password: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    // console.log('sending the fetch');
    if (this.state.name !== '' && this.state.email !== '' && this.state.password !== '' && this.state.password === this.state.matching_password) {
      this.props.signupUser(this.state)
      const token = localStorage.getItem('token')
      if (token) {
        this.props.history.push('/profile')
      }
    } else {
      alert(`We can't sign you up for the Garden Party! Try again.`)
    }
  }

  render() {
    // console.log(this.state);
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="signup-container">
          <div className='signup-title'>
            <span>Signup for Garden Party</span>
          </div>
          <div className='signup-form'>
            <div className='signup-input'>
              <input type="text" name="name" placeholder='Name (First and Last)' onChange={this.handleChange} value={this.state.name} />
              <input type="text" name="email" placeholder='Email' onChange={this.handleChange} value={this.state.email} />
              <input type="password" name="password" placeholder='Password' onChange={this.handleChange} value={this.state.password} />
              <input type="password" name="matching_password" placeholder='Retype Password' onChange={this.handleChange} value={this.state.matching_password} />
            </div>
          </div>
        </div>
        <div className='bottombox-signup'>
          <div>
          <input type="submit" value="Submit" className='signup-submit' />
          </div>
          <div className='already'>
          <NavLink to="/login" activeClassName="active" className='signup-link'>
            Already have an account? Login Here.
          </NavLink>

          </div>
        </div>
      </form>
    )
  }

}//end of class

const mapStateToProps = (state) => {
  console.log('app state', state);
  return {
    state
  }
}

export default connect(mapStateToProps, actions)(withRouter(SignupForm));
