import { Link } from 'react-router-dom'
import React from 'react'

const AddContact = (props) => {
    return (
      <div>
        <form>
            <label>Image_url</label>
            <input type='text' className='form-control'onChange={event =>
                this.setState({ name: event.target.value })
            }/>
            <label>Name</label>
            <input type='text' className='form-control'onChange={event =>
                this.setState({ name: event.target.value })
            }/>
            <label>Email</label>
            <input type='text' className='form-control'onChange={event =>
                this.setState({ name: event.target.value })
            }/>
            <label>Phone</label>
            <input type='text' className='form-control'onChange={event =>
                this.setState({ name: event.target.value })
            }/>

            <button type='button' onClick={this.handleAddContactChange}>Submit</button>
        </form>

        <Link to='/contactList'>Contact List</Link>
      </div>
    )
};

class newContact extends React.Component {
    constructor () {
        super () 

    this.state = {
        image: '',
        name: '',
        email: '',
        phone: ''
    }

    this.handleAddContactChange = this.handleAddContactChange.bind(this)
    }


    handleAddContactChange () {
        const newContact = {
            image: this.state.image,
            name: this.state.name,
            email: this.state.email,
            phone: this.state.email
        };

        this.props.addContact(newContact)
        this.props.history.push('/contactList')
    }

    render () {
        return (
            <div>
        <form>
          <label>Image</label>
          <input type='url' className='form-control'onChange={event =>
            this.setState({ image: event.target.value })
          }/>

          <br/>

          <label>Name</label>
          <input type='text' className='form-control'onChange={event =>
            this.setState({ name: parseInt(event.target.value, 10) })
          }/>

          <br/>

          <label>Email</label>
          <input type='text' className='form-control'onChange={event =>
            this.setState({ email: event.target.value })
          }/>

           <br/>

            <label>Phone</label>
          <input type='text' className='form-control'onChange={event =>
            this.setState({ phone: event.target.value })
          }/>

          <button type="button" onClick={this.handleAddContactChange}>Submit</button>
        </form>
        
      <Link to='/contactList'>Contact List</Link>
      </div>
        )
    }
}

export default AddContact