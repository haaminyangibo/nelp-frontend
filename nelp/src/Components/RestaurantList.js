import React from 'react'
import RestaurantCard from './RestaurantCard'
import ShowRestaurant from './ShowRestaurant'

import { Card } from 'semantic-ui-react';


const RestaurantList = props => {

    const {restaurants, showCardDetails} = props; 
    return (
       <div>
  <Card.Group itemsPerRow ={6}>
       { restaurants.map( restaurant => <RestaurantCard restaurant = {restaurant} showCardDetails={showCardDetails}/>)}
 </Card.Group> 
     </div>
         )   
}


export default RestaurantList 