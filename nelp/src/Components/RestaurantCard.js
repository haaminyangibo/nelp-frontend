
import React from 'react'
import { Card, Icon, Button } from 'semantic-ui-react'

const RestaurantCard = props => {

    const {restaurant, showCardDetails, saveRestaurant} = props 

//     const category = restaurant.categories.map(title=> title.title )

   return(
        <div>
        <Card  onClick= {()=>showCardDetails(restaurant.id)}
        image = {restaurant.image_url}
        header ={restaurant.name}
     //    meta ={category}
     //    description='restauarant description'
        /> 

        <Button  onClick ={()=> saveRestaurant(restaurant.id) }/>
        </div>
   )
}

export default RestaurantCard 