import React, { Component } from 'react';


class ContactForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            textarea: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = event => {
        this.setState({
            name: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault()

    }

    render() {
        return (
            <form className="contact-form" onSubmit={this.handleSubmit}>
                <div className="form-group text-left">
                    <label htmlFor="name">Name:</label>
                    <input className="form-control"  type="text"  name="name" onChange={this.handleChange} />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="email">Email:</label>
                    <input className="form-control"  type="email" name="email" placeholder="username@gmail.com" onChange={this.handleChange} />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="message">Message:</label>
                    <textarea className="form-control" name="textarea"  onChange={this.handleChange}></textarea>
                </div>
                <button>Submit</button>
            </form>
                )
            }
        }
        
export default ContactForm;
