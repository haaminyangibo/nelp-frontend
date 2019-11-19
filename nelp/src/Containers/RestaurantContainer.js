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
      savedRestaurants :[],
      searchResults: [],
      displayMySavedRestaurants: false,
      displaySearchResults: false,
      displayAllRestaurants: true,
      showRestaurant: false,
    }

    componentDidMount(){
        bad_restaurants.forEach(id => {
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
        API.saveRestaurant(id).then(alert("You just saved this restaurant!"))
    }
    

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

    updateStateWithSavedRestaurants = (savedRestaurants) => {
        // debugger
        this.setState({
            savedRestaurants: savedRestaurants["saved_restaurants"]
        })
        this.setState({
            displayMySavedRestaurants: true,
            displaySearchResults: false,
            displayAllRestaurants: false,
            showRestaurant: false
        })
    }

    showSavedRestaurants = () => {
        API.getSavedRestaurants(localStorage.getItem('user_id')).then(this.updateStateWithSavedRestaurants)
    }

    showSearchResults =(category) => {
// debugger
        API.getRestaurants(category).then( searchResult =>

        this.setState({
            searchResults: searchResult,

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
                <div><RestaurantList restaurants = {this.state.savedRestaurants} showCardDetails= {this.showCardDetails} selectedRestaurant= {this.state.selectedRestaurant} saveRestaurant = {this.saveRestaurant} /></div>
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

    checkWhatTitleToRender = () => {

        if (this.state.displaySearchResults){
            return(
            <div class= "title" >
              <h1> Here are some Great restaurants! </h1>
             </div>
            )
        }

        else if (this.state.displayMySavedRestaurants){
            return(
            <div class= "title" >
              <h1> Here are your saved restaurants! </h1>
            </div>
            )
        }

        else {
            return(
            <div class= "title" >
            <h1> Here are some AWFUL restaurants! </h1>
          </div>
            )
        }
    }
    

     render () {
        return (  
            <div>
            
            <div>
             <NavBar home = {this.backToHome} showSavedRestaurants ={this.showSavedRestaurants} showSearchResults={this.showSearchResults} /> 
            </div>
            <div>
                {this.checkWhatTitleToRender()}
            </div>
           

            <div class= "restaurant-container">
                 {this.checkWhatMethodToRender()}
            </div>
            </div>


            )
        }
    }


export default RestaurantContainer