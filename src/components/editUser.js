import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions'
import EditUserForm from '../components/editUserForm';
import Modal from './modal';
import '../css/modal.css'
// import EditPasswordForm from '../components/editPasswordForm';

import '../css/editUser.css'

class EditUser extends Component {

  openCloseModal = () => {
    console.log('clicking btn');
    this.props.toggleModal()
  }

  // editUser = () => {
  //   console.log('click clack edit a user');
  // }
  //
  // editPassword = () => {
  //   console.log('click clack edit pw');
  // }

  render(){
    // console.log('edit user render', this.props.state.showModal);
    const modal = this.props.state.showModal
    ? (
      <Modal>
        <div id="outer-modal">
          <div className="inner-modal">
          <div className="modal-content">
          <EditUser />
          <button onClick={this.openCloseModal}>hide</button></div></div>
        </div>
      </Modal>
    )
    : null
    return(
      <div className="editUser">
        <button className="edit-user-btn" onClick={this.openCloseModal}>click me to edit user</button>
        {modal}
      </div>
    )
  }

} // end of class

const mapStateToProps = (state) => {
  return {
    state
  }
}

export default connect(mapStateToProps, actions)(EditUser);
