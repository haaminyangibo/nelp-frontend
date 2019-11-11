import React from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'

class LoginForm extends React.Component {

    state = {
        email: "",
        password: ""
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render(){
        return(
            <Form>
                <Form.Field>
                    <input placeholder='Email' name="email" value={this.state.email} onChange={this.handleChange}/>
                </Form.Field>
                
                <Form.Field>
                    <input placeholder='Password' name="password" type="password" value={this.state.password} onChange={this.handleChange}/>
                </Form.Field>
                
                <Button type='submit'>Log In</Button>
            </Form>
        )
    }

}

export default LoginForm