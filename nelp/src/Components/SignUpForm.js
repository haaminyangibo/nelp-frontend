import React from 'react';
import { Button, Checkbox, Form, Container } from 'semantic-ui-react'
import signup_illustration from '../data/signup_illustration.png'
import API from '../API';


class SignUpForm extends React.Component {

    state = {
        first_name: "",
        last_name: "",
        email: "",
        password: ""
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        return API.createUser(this.state).then(data => {
            if (data.error) throw Error(data.error)
            this.props.signIn(data)
             this.props.history.push('/restaurants')
        })
        .catch(error => console.log(error))
    }

    render(){
        return(
            <div>
                <Container centered >
                <img src={signup_illustration} class="center"></img>
                <h2 class="form-text">Sign Up for Nelp</h2>
                <h3 class="form-text">Connect with terrible restaurants</h3>
                <Form className="form" onSubmit={this.handleSubmit}>
                    <Form.Checkbox required name="terms"label='By continuing, I agree to Nelp’s Terms of Service and acknowledge Nelp’s Privacy Policy, including Nelp’s cookie policy.' />
                    <Form.Group widths='equal'>
                        <Form.Input required name="first_name"placeholder='First Name' onChange={this.handleChange} />
                        <Form.Input required name="last_name" placeholder='Last Name' onChange={this.handleChange}/>
                    </Form.Group>
                    
                    <Form.Input required name="email" placeholder='Email' onChange={this.handleChange}/>
                    <Form.Input required name="password" type="password" placeholder='Password' onChange={this.handleChange}/>

                    <Form.Checkbox label='Yes, I want Nelp to send me marketing emails about Nelp’s products, services, and local events. I can unsubscribe at any time.' />

                    <Button type="submit">Sign Up</Button>
                </Form>
                </Container>
            </div>
        )
    }

}

export default SignUpForm