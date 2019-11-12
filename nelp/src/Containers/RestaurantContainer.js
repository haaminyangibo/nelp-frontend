import React from 'react';
import RestaurantList from '../Components/RestaurantList'
import API from '../API';
import ShowRestaurant from '../Components/ShowRestaurant'
import RestaurantDetails from '../Components/RestaurantDetails'
import bad_restaurants from '../bad_restaurants';
import Seacrhabar from '../Components/Search'
import { Switch, Route } from 'react-router-dom'

class RestaurantContainer extends React.Component {

    state = {
      restaurants : [],
      selectedRestaurant: [],
      showRestaurant: false,
      selectedRestaurantID : [],
      savedRestaurant :[]
    }

    componentDidMount(){

        bad_restaurants.forEach(id => {
            // debugger 
            API.getRestaurant(id).then(restaurant => this.setState({
                restaurants: [
                    ...this.state.restaurants,
                    restaurant
                ]
            }))
        })
    }

   showCardDetails = (id) => {

     let  restaurantId = id
    let clickedRestuarant = (this.state.restaurants.filter(restaurant => restaurant.id === restaurantId ))

    this.setState({
        selectedRestaurant: clickedRestuarant,
        showRestaurant :true,
        selectedRestaurantID :id
             }
         )
    }

    saveRestaurant = (id) => {
         let savedRestaurantId = id   

        this.setState ({
            savedRestaurant: [...this.state.savedRestaurant, savedRestaurantId]
        })}
    

    removeCardDetails = () => {

        this.setState({
            showRestaurant: false
        })
    }

     render (){

        return (     
            
        this.state.showRestaurant ?
          
        <RestaurantDetails id ={this.state.selectedRestaurantID} saveRestaurant = {this.saveRestaurant} home ={this.backToHome}/>
        :
        <RestaurantList restaurants = {this.state.restaurants} showCardDetails= {this.showCardDetails} selectedRestaurant= {this.state.selectedRestaurant} saveRestaurant = {this.saveRestaurant}/>
       
        )
    }
}

export default RestaurantContainer