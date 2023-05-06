import React, { Component } from 'react';
import { Consumer } from '../../context';
import { v4 as uuidv4} from 'uuid';
import TextInputGroup from '../layouts/TextInputGroup';

class AddContact extends Component {

  state = {
    name: '',
    email: '',
    phone: '',
    errors: {}
  };

  onSubmit = (dispatch, e) => {
    e.preventDefault();
    
    // Pulling values out of the state
    const { name, email, phone, errors } = this.state;

    // Check for errors
    if(name === '') {
        this.setState({errors: { name: 'Name is required'}});
        return;
    }

    if(email === '') {
        this.setState({errors: { email: 'Email is required'}});
        return;
    }

    if(phone === '') {
        this.setState({errors: { phone: 'Phone is required'}});
        return;
    }

    // Creating new contact
    const newContact = {
        id: uuidv4(),
        name,
        email,
        phone
    };

    dispatch({
        type: 'ADD_CONTACT', 
        payload: newContact
    });

    // Clear state
    this.setState({
        name: '',
        email: '',
        phone: '',
        errors: {}
    });
  };

  onChange = (e) => this.setState({[e.target.name]: e.target.value});

  render() {
    const { name, email, phone, errors } = this.state;

    return (
        <Consumer>
            {value => {
                const { dispatch } = value;
                return (
    <div>
        <div className='card mb-3'>
            <div className='card-header'>Add Contact</div>
            <div className='card-body'>
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                    
                    <TextInputGroup 
                    label='Name'
                    name='name'
                    placeholder='Enter Name...'
                    value={name}
                    onChange={this.onChange}
                    error={errors.name}
                    //required
                    />

                    <TextInputGroup 
                    label='Email'
                    name='email'
                    type='email'
                    placeholder='Enter Email...'
                    value={email}
                    onChange={this.onChange}
                    error={errors.email}
                    //required
                    />

                    <TextInputGroup 
                    label='Phone'
                    name='phone'
                    placeholder='Enter Phone...'
                    value={phone}
                    onChange={this.onChange}
                    error={errors.phone}
                    //required
                    />
                    <input style={{width: '100%'}} 
                    type='submit' 
                    value='Add Contact' 
                    className='btn btn-info btn-md btn-block mt-3'
                    />
                </form>
            </div>
        </div>
      </div>
                );
            }}
        </Consumer>
    );
  }
}

export default AddContact;