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
        
 
    API.getRestaurants("Indian").then(data => this.setState({ initialItems: data}))
        // debugger
    let items = this.state.initialItems.map(item=> item.name)
    items = items.filter(item => {

    return item.toString().toLowerCase().search(event.target.value.toString().toLowerCase()) !== -1 })

    
    
    this.setState({ items:items })}

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(event.target.value)

    }

   



      
       
    

    
    render (){
        return(

        <div>

            <form>
                <input type ="text" placeholder ="search for restaurants" onChange ={this.filterList} onSubmit={this.handleSubmit}/>
            </form>
            
            {/* {this.state.initialItems.map (item => item.name === this.state.items <RestaurantCard restaurant ={item}/>)} */}
        </div>
      
      )
    }
} 

export default Searchbar