
import React from 'react'
import { Card, Icon } from 'semantic-ui-react'

const RestaurantCard = props => {

    const {restaurant} = props 

   return(
        <Card 
        header ={restaurant.name}
        meta='Restaurant Category'
        description='restauarant description'
 
        /> 
  
   )
}

export default RestaurantCard 