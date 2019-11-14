import React from 'react';
import RestaurantList from '../Components/RestaurantList'
import API from '../API';
import RestaurantDetails from '../Components/RestaurantDetails'
import bad_restaurants from '../data/bad_restaurants';
import NavBar from '../Containers/NavBar'
import {Container} from 'semantic-ui-react'
import Header from './Header'

class RestaurantContainer extends React.Component {

    state = {
      restaurants : [],
      selectedRestaurant: [],
      selectedRestaurantID : [],
      savedRestaurant :[],
      searchResults: [],
      displayMySavedRestaurants: false,
      displaySearchResults: false,
      displayAllRestaurants: true,
      showRestaurant: false,
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
         let newSavedRestaurant = (this.state.restaurants.filter(restaurant => restaurant.id === savedRestaurantId ))
        Object.assign({}, newSavedRestaurant)
         this.setState ({
            savedRestaurant:  [...this.state.savedRestaurant, newSavedRestaurant]
        })}
    

    removeCardDetails = () => {

        this.setState({
            showRestaurant: false
        })
    }

    backToHome = () => {
        console.log("I was Cliked")
        this.setState({

            displayMySavedRestaurants: false,
            displaySearchResults: false,
            displayAllRestaurants: true,
            showRestaurant: false,
        })
    }

    showSavedRestaurants = () => {
        this.setState({

            displayMySavedRestaurants: true,
            displaySearchResults: false,
            displayAllRestaurants: false,
            showRestaurant: false,
        })

    }

    showSearchResults = (searchResults) => {
// debugger
        API.getRestaurants(searchResults).then( searchData =>
        this.setState({
            searchResults: searchData,

            displayMySavedRestaurants: false,
            displaySearchResults: true,
            displayAllRestaurants: false,
            showRestaurant: false,

        })
        )

    }
    checkWhatMethodToRender = () => {

            if (this.state.showRestaurant) {
            return (
                <div><RestaurantDetails id ={this.state.selectedRestaurantID} saveRestaurant = {this.saveRestaurant} home ={this.backToHome}/>
                </div>
            )
            } else if (this.state.displayMySavedRestaurants) {
            return (
                <div><RestaurantList restaurants = {this.state.savedRestaurant} showCardDetails= {this.showCardDetails} selectedRestaurant= {this.state.selectedRestaurant} saveRestaurant = {this.saveRestaurant} /></div>
            )
            } else if (this.state.displaySearchResults) {
                return (
                <div><RestaurantList restaurants = {this.state.searchResults} showCardDetails= {this.showCardDetails} selectedRestaurant= {this.state.selectedRestaurant} saveRestaurant = {this.saveRestaurant}/></div>
                )
            } else  {
            return (
                <div><RestaurantList restaurants = {this.state.restaurants} showCardDetails= {this.showCardDetails} selectedRestaurant= {this.state.selectedRestaurant} saveRestaurant = {this.saveRestaurant}/></div>
                 )
            } 
        }

    

     render () {
        return (  
            <div>
                
                
             <NavBar home = {this.backToHome} showSavedRestaurants ={this.showSavedRestaurants} showSearchResults={this.showSearchResults} /> 
                
                {this.checkWhatMethodToRender()}
            </div>
            )
        }
    }


export default RestaurantContainer