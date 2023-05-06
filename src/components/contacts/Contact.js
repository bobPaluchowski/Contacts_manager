import React, { Component } from 'react'
import PropTypes from 'prop-types';
//import './contact.css';
import { Consumer } from '../../context';

class Contact extends Component {

  // One way
  static propTypes = {
  contact: PropTypes.object.isRequired,
}
state = {
  showContactInfo: false
};

onShowClick = (e) => {
  this.setState({ showContactInfo: !this.state.showContactInfo })
};

onDeleteClick = (id, dispatch) => {
  dispatch({type: 'DELETE_CONTACT', payload: id});
}

  render() {
    // for li I can do this: 
    const { id, name, email, phone } = this.props.contact;
    // then, use it like so { email }

    const { showContactInfo } = this.state;

    // Without destructuring use this.props.name etc...
    // const { contact } = this.props;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
      <div className='card card-body mb-3'>
        <h4>
          {name}{' '} <i onClick={this.onShowClick} className='fas fa-sort-down' style={{ cursor: 'pointer', color: 'green'}}/>
          <i className='fas fa-times' style={{ cursor: 'pointer', float: 'right', color: 'red'}} onClick={this.onDeleteClick.bind(this, id, dispatch)}></i>
        </h4>
        {showContactInfo ? (<ul className='list-group'>
          <li className='list-group-item'>Email: {email}</li>
          <li className='list-group-item'>Phone: {phone}</li>
        </ul>) : null}
      </div>
 
          )
        }}
      </Consumer>

   );
  }
}

// Another way
//Contact.propTypes = {
  //name: PropTypes.string.isRequired,
  //email: PropTypes.string.isRequired,
  //phone: PropTypes.string.isRequired
//}

export default Contact;
