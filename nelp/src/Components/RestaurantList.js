import React from 'react'
import RestaurantCard from './RestaurantCard'
import { Card } from 'semantic-ui-react';


const RestaurantList = props => {
    const {restaurants} = props; 
    return (

         <Card.Group itemsPerRow ={6}>

       { restaurants.map( restaurant => <RestaurantCard restaurant = {restaurant}/>)}
        </Card.Group>

        )
    
}


export default RestaurantList 