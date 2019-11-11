import React from 'react'
import RestaurantCard from './RestaurantCard'
import ShowRestaurant from './ShowRestaurant'

import { Card } from 'semantic-ui-react';


const RestaurantList = props => {

    const {restaurants, showCardDetails, saveRestaurant} = props; 
    return (
       <div>
  <Card.Group itemsPerRow ={5}>
       { restaurants.map( restaurant => <RestaurantCard restaurant = {restaurant} showCardDetails={showCardDetails} saveRestaurant= {saveRestaurant}/>)}
 </Card.Group> 
     </div>
         )   
}


export default RestaurantList 