import React from 'react';
import NavBar from './Containers/NavBar'
import './App.css';
import RestaurantContainer from './Containers/RestaurantContainer'
import Header from './Containers/Header'
import Search from './Components/Search'
import LoginForm from './Components/LoginForm'
import SignUpForm from './Components/SignUpForm'

class App extends React.Component {

  state = {
    token: ""
  }

  render(){
    return (

      <div>
        <SignUpForm></SignUpForm>
        <br>
        </br>
        <LoginForm></LoginForm>
      </div>
      

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
