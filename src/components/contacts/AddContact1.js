// THIS IS UNCONTROLLED COMPONENT, WITH PRE-FILLED FORM THAT I CAN EDIT AND SUBMIT
import React, { Component } from 'react'

class AddContact1 extends Component {
    constructor(props) {
        super(props);

        this.nameInput = React.createRef();
        this.emailInput = React.createRef();
        this.phoneInput = React.createRef();
    }

  onSubmit = (e) => {
    e.preventDefault();
    const contact = {
        name: this.nameInput.current.value,
        email: this.emailInput.current.value,
        phone: this.phoneInput.current.value
    }
  };

  static defaultProps = {
    name: 'Johnny Bravo',
    email: 'jbravo@gmail.com',
    phone: '666-666-6666'
  };

  render() {
    const { name, email, phone } = this.props;
    return (
      <div>
        <div className='card mb-3'>
            <div className='card-header'>Add Contact</div>
            <div className='card-body'>
                <form onSubmit={this.onSubmit}>
                    <div className='form-group'>
                        <label htmlFor='name'>Name</label>
                        <input 
                        type='text' 
                        name='name'
                        className='form-control form-control-lg' 
                        placeholder='Enter Name...'
                        defaultValue={name}
                        ref={this.nameInput}
                        />
                    </div>

                    <div className='form-group'>
                        <label htmlFor='email'>Email</label>
                        <input 
                        type='email' 
                        name='email'
                        className='form-control form-control-lg' 
                        placeholder='Enter Email...'
                        defaultValue={email}
                        ref={this.emailInput}
                        />
                    </div>

                    <div className='form-group'>
                        <label htmlFor='phone'>Phone</label>
                        <input 
                        type='text' 
                        name='phone'
                        className='form-control form-control-lg' 
                        placeholder='Enter Phone...'
                        defaultValue={phone}
                        ref={this.phoneInput}
                        />
                    </div>
                    <input 
                    type='submit' 
                    value='Add Contact' 
                    className='btn btn-light btn-block'
                    />
                </form>
            </div>
        </div>
      </div>
    )
  }
}

export default AddContact;