import React from 'react'
import { Card} from 'semantic-ui-react'
import Reviews from './Reviews'

class  RestaurantDetails extends React.Component {
    

    state = {
        restaurant: [],
        reviews : [],
        
    }


    componentDidMount(){

        return fetch(`http://localhost:3000/restaurants/${this.props.id}`).then(resp=> resp.json()).then( data => this.setState({
            restaurant :data
        })

        )}

    render (){ 
        
        // const category = restaurant.categories.map(title=> title.title )    
        // const {restaurant} = this.state.restaurant

        return (
            
                <div>
                    <Card   
                    image = {this.state.restaurant.image_url}
                    header= {this.state.restaurant.name}
                    // meta = {category + " " + restaurant.rating}
                    description= {this.state.restaurant.rating}   
                    saveRestaurant = {this.props.saveRestaurant}   
                    />
                    <Reviews id ={this.props.id}/>            
                  
                </div>    

        )
    }
    
          
}

export default RestaurantDetails 