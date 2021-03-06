import React from 'react';
import './App.css';
import RestaurantContainer from './Containers/RestaurantContainer'
import Header from './Containers/Header'
import LoginForm from './Components/LoginForm'
import SignUpForm from './Components/SignUpForm'
import API from './API';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NotFound from './Components/NotFound'
import Footer from './Components/Footer'



class App extends React.Component {

  state = {
    user: "",
    user_id: ""
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
    localStorage.setItem('user_id', user.id)
  }

  signOut = () => {
    this.setState({ user: '' })
    localStorage.removeItem('token')
  }

  render(){

    return (
   
      <div>  

        
          <Header user={this.state.user}></Header>

    
         <Router>          
        
        <Switch>
            {/* {user ? } */}
            <Route exact path = "/" component={routerProps => <LoginForm {...routerProps} signIn={this.signIn} user={this.state.user}/>}/>
            <Route path = "/restaurants" component={RestaurantContainer}/>
            <Route path = "/myrestaurants" />
            <Route path="/login" component={routerProps => <LoginForm {...routerProps} signIn={this.signIn} user={this.state.user}/>}/>
            <Route path ="/signup" component={routerProps => <SignUpForm {...routerProps} signIn={this.signIn} user={this.state.user}/>} />
            <Route path="/search/:searchTerm" />
            <Route component={NotFound}/>


          </Switch>
  
         </Router>

        <Footer/>
       </div>
       
    );
   
  }

}

export default App
