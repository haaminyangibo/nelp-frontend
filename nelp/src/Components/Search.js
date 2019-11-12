import React from 'react'
// import { Grid, Header, Segment } from 'semantic-ui-react'
import RestaurantList from './RestaurantList'
import API from '../API'

import _ from 'lodash'
import RestaurantCard from './RestaurantCard'



class Searchbar extends React.Component {

state = {

        initialItems :[],
        items: ""
    }

    filterList = (event) => {

    this.setState({ items: event.target.value})
}

    handleSubmit = (event) => {
    event.preventDefault()
    console.log(event.target.value)
    API.getRestaurants(this.state.items).then(data => this.setState({ initialItems: data})).then(console.log(this.state.initialItems))

    }
    
    render (){
        return(
        <div>
            <form onSubmit={(e) => {this.handleSubmit(e)}} >
                <input type ="text" placeholder ="search for restaurants" onChange ={this.filterList} />
            </form>         
        </div>
      
      )
    }
} 

export default Searchbar