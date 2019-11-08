import React from 'react';
import RestaurantList from '../Components/RestaurantList'

class RestaurantContainer extends React.Component {

    state = {
        restaurants : [{name: "Burger King"}, {name: "Mcdonalds"}, {name: "KFC"}]
    }

    render (){

        return (
            <div><RestaurantList restaurants = {this.state.restaurants}/></div>
        )
    }
}

export default RestaurantContainer