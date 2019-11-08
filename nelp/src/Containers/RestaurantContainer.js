import React from 'react';
import RestaurantList from '../Components/RestaurantList'
import API from '../API';
import ShowRestaurant from '../Components/ShowRestaurant'


class RestaurantContainer extends React.Component {

 
    state = {
      restaurants : [],
      selectedRestaurant: [],
      showRestaurant: false

    }


    componentDidMount(){
       return fetch("http://localhost:3000/restaurants").then(resp=> resp.json()).then( data => this.setState({

        restaurants: data["businesses"]
        }))
    }

   showCardDetails = (id) => {

     let  restaurantId = id
     console.log(restaurantId)
    let clickedRestuarant = (this.state.restaurants.filter(restaurant => restaurant.id === restaurantId ))

    this.setState({

        selectedRestaurant: clickedRestuarant,
        showRestaurant :true

         }
        
     )
}


    removeCardDetails = () => {

        this.setState({
            showRestaurant: false
        })
    }


     render (){

        return (     
        this.state.showRestaurant ?
        <RestaurantList restaurants = {this.state.selectedRestaurant} showCardDetails = {this.removeCardDetails}/> 
            
         :

         <RestaurantList restaurants = {this.state.restaurants} showCardDetails= {this.showCardDetails} selectedRestaurant= {this.state.selectedRestaurant}/>

         

        )
    }
}

export default RestaurantContainer