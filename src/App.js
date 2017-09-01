import React, { Component } from 'react'
import ListContacts from './ListContacts'

class App extends Component {
	state = {
		contacts : [
			{
				"id": "ryan",
				"name": "Ryan Florence",
				"email": "ryan@reacttraining.com",
				"avatarURL": "http://localhost:5005/ryan.jpg"
			},
			{
				"id": "michael",
				"name": "Michael Jackson",
				"email": "michael@reacttraining.com",
				"avatarURL": "http://localhost:5005/michael.jpg"
			},
			{
				"id": "tyler",
				"name": "Tyler McGinnis",
				"email": "tyler@reacttraining.com",
				"avatarURL": "http://localhost:5005/tyler.jpg"
			}
		]
	}
	
	removeContact = (contact) =>  {
		this.setState((prevState) => ({
			contacts: prevState.contacts.filter((c) => c.id !== contact.id)
		}))
	}
	
  render() {
    return (
      <div>
        <ListContacts
	        onDeleteContacts={this.removeContact}
	        contacts={this.state.contacts} />
      </div>
    )
  }
}

export default App;
