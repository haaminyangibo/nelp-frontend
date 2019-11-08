import React from 'react';
import RestaurantList from '../Components/RestaurantList'
import API from '../API';

class RestaurantContainer extends React.Component {

 

    state = {
      restaurants : []
    }

    componentDidMount(){
       return fetch("http://localhost:3000/restaurants").then(resp=> resp.json()).then( data => this.setState({

        restaurants: data["businesses"]
        }))
    }

    render (){

        return (
            <div><RestaurantList restaurants = {this.state.restaurants}/></div>
        )
    }
}

export default RestaurantContainer