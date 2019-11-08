
import React from 'react'
import { Card, Icon } from 'semantic-ui-react'

const RestaurantCard = props => {

    const {restaurant, showCardDetails} = props 

//     const category = restaurant.categories.map(title=> title.title )

   return(
        
        <Card fluid onClick= {()=>showCardDetails(restaurant.id)}
        image = {restaurant.image_url}
        header ={restaurant.name}
     //    meta ={category}
     //    description='restauarant description'
        
 
        /> 
  
   )
}

export default RestaurantCard 