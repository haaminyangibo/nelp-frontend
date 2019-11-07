import React from 'react'
import RestaurantCard from './RestaurantCard'


const RestaurantList = props => {
    const {restaurants} = props; 
    return (
    restaurants.map( restaurant => <RestaurantCard restaurant = {restaurant} />)
    )
}


export default RestaurantList 