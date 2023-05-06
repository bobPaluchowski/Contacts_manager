import React, { Component } from 'react'
import Contact from './Contact'
import { Consumer } from '../../context';

class Contacts extends Component {
    // state should always be at the top
            
  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          return (
      // Div can be substituted by React.Fragment element
      <div>
        {contacts.map(contact => (
            <Contact 
            key={contact.id}
            contact={contact} />
        ))}
      </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts; 