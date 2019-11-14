import React from 'react'
import { Button, Card, Container, Divider} from 'semantic-ui-react'
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
        
        const {saveRestaurant, home} = this.props
        const {restaurant} = this.state

        return (   
                <div>
        <Container centered textAlign="center">  
          <Card.Group centered >
            <Card >
                <img src={restaurant.image_url} height={200}/> 
                <Card.Content>
            
                    <Card.Header>{restaurant.name}</Card.Header>
                    <Card.Meta>
                        <span className='date'>{restaurant.price}</span>
                    </Card.Meta>
                    <Card.Description>
                        Rating: {restaurant.rating }
                    </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div class = "ui two buttons">
                    <Button basic onClick ={()=> saveRestaurant(restaurant.id) }>Save Restaurant</Button>
                    
                    </div>
                
                </Card.Content>
                <Reviews id ={this.props.id}/>   
            </Card>   
          </Card.Group>  
        </Container> 
                  
                </div>    

        )
    }
    
          
}

export default RestaurantDetails 