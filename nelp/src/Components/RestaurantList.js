import React from 'react'
import RestaurantCard from './RestaurantCard'
import ShowRestaurant from './ShowRestaurant'

import { Card , Container } from 'semantic-ui-react';


const RestaurantList = props => {

    const {restaurants, showCardDetails, saveRestaurant} = props; 
    return (
        <div>
            <Container>
            <Card.Group centered itemsPerRow ={5}>
            { restaurants.map( restaurant => <RestaurantCard restaurant = {restaurant} showCardDetails={showCardDetails} saveRestaurant= {saveRestaurant}/>)}
            </Card.Group> 
            </Container>
         </div>
    )   
}


export default RestaurantList 