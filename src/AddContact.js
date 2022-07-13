import { Link } from 'react-router-dom'
import React from 'react'

const AddContact = (props) => {
    return (
      <div>
        <h1>Add a New Contact</h1>
        <h2>To add a new person to the Contact List, complete the form below, and push the "submit" button</h2>
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

            <button type='button'>Submit</button>
             
        </form>

          </div>
    )
          }
 
export default AddContact