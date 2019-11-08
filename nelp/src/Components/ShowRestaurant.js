import React from 'react'
import RestaurantCard from './RestaurantCard'
import { Card } from 'semantic-ui-react'

const ShowRestaurant = props => {

const {restaurant} = props 

return (
    <div>
    <Card.Group itemsPerRow ={1}>
     
    <RestaurantCard restaurant = {restaurant}/>
    
    </Card.Group>

    </div>

    
   
    )
} 

export default ShowRestaurant 