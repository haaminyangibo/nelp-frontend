import React from 'react'
import { Menu } from 'semantic-ui-react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Searchbar from '../Components/Search'


export default class NavBar extends React.Component{

    state = {

  }

render(){
    const {home, showSavedRestaurants, showSearchResults} = this.props
    return(
        <div class ="nav">
        <Router>
        <Menu className ="nav"> 
            <Menu.Item name="Home" onClick= {home} />
            <Menu.Item name="Saved Restaurants" onClick ={showSavedRestaurants}/>
            <Menu.Item position= "right"><Searchbar showSearchResults={showSearchResults}/></Menu.Item>    
        </Menu>
        </Router>
        </div>
        )
    }
}
