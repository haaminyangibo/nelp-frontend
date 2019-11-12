import React from 'react';
import NavBar from './Containers/NavBar'
import './App.css';
import RestaurantContainer from './Containers/RestaurantContainer'
import Header from './Containers/Header'
import Search from './Components/Search'
import LoginForm from './Components/LoginForm'
import SignUpForm from './Components/SignUpForm'
import API from './API';
import {Button} from 'semantic-ui-react'


class App extends React.Component {

  state = {
    user: ""
  }

  componentDidMount () {
    const token = localStorage.getItem('token')
    if (token) {
      API.validate()
        .then(data => {
          if (data.error) throw Error(data.error)
          this.signIn(data)
          // this.props.history.push('/inventory')
        })
        .catch(error => alert(error))
    }
  }

  signIn = user => {
    this.setState({ user: user.first_name })
    localStorage.setItem('token', user.token)
  }

  signOut = () => {
    this.setState({ user: '' })
    localStorage.removeItem('token')
  }









  render(){
    return (

      <div>
        <Header user={this.state.user}></Header>
        <SignUpForm signIn={this.signIn}></SignUpForm>
        <br>
        </br>
        <LoginForm signIn={this.signIn}></LoginForm>
        { this.state.user && <Button onClick={() => this.signOut()}>Sign Out</Button>}
      </div>
      
      // INTEGRATE WITH BELOW WHEN SIGN IN/SIGN UP DONE
      // <div>  
      //   <Header/>
      //   <NavBar/> 
      //   {/* <Search /> */}
      //   <RestaurantContainer/>
      // </div>
       
    );
  }
}

export default App
