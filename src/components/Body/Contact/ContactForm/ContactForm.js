import React, { Component } from 'react';
import * as emailjs from 'emailjs-com';

class ContactForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            subject: '',
            message: ''
        }
    }

    handleSubmit(e) {
        e.preventDefault()
        const { name, email, subject, message } = this.state
        let templateParams = {
            name: name,
            from_name: email,
            to_name: 'stevenliao19900326_gmail_com',
            subject: subject,
            message_html: message,
        }
        emailjs.send(
            'stevenliao19900326_gmail_com',
            'template_RE5ZKJKm',
            templateParams,
            'user_7gReS0ajm7cIrdqEMnFtR'
        ).then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert("Your email has been sent!");
         }, function(error) {
            console.log('FAILED...', error);
            alert("Network error!");
         });

        this.resetForm()
    }

    resetForm() {
        this.setState({
            name: '',
            email: '',
            subject: '',
            message: '',
        })
    }

    handleChange = (param, e) => {
        this.setState({ [param]: e.target.value })
    }

    render() {
        return (
            <form className="contact-form text-left" onSubmit={this.handleSubmit.bind(this)}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        className="form-control"
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange.bind(this, 'name')}
                        placeholder="Name" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        className="form-control"
                        type="email"
                        name="name"
                        value={this.state.email}
                        onChange={this.handleChange.bind(this, 'email')}
                        placeholder="eg. xx@gmail.com"
                        required />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Subject</label>
                    <input
                        className="form-control"
                        type="text"
                        name="subject"
                        value={this.state.subject}
                        onChange={this.handleChange.bind(this, 'subject')}
                        required />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea 
                        className="form-control" 
                        type="textarea"
                        name="message"
                        value={this.state.message}
                        onChange={this.handleChange.bind(this, 'message')} />
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default ContactForm;
