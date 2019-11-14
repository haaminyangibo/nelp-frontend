
import React from 'react'
import { Card, Icon, Button } from 'semantic-ui-react'

const RestaurantCard = props => {

   const {restaurant, showCardDetails, saveRestaurant} = props 
   return(
      //   <div>
      //   <Card  
      
      //   header ={restaurant.name}
      //   />
      //   <Button  onClick ={()=> saveRestaurant(restaurant.id) }>Save Restaurant</Button>
      //   <Button  onClick= {()=>showCardDetails(restaurant.id)}> See More Details</Button>

      //   </div>

         <Card>
         <img src={restaurant.image_url} height={200}/> 
         <Card.Content>
         <Card.Header>{restaurant.name}</Card.Header>
         <Card.Meta>
            <span className='date'>{restaurant.price}</span>
         </Card.Meta>
         <Card.Description>
           {restaurant.is_closed ? "closed" :"open" }
         </Card.Description>
         </Card.Content>
         <Card.Content extra>
            <div class = "ui two buttons">
         <Button basic onClick ={()=> saveRestaurant(restaurant.id) }>Save Restaurant</Button>
         <Button basic onClick= {()=>showCardDetails(restaurant.id)}> See More Details</Button>
         </div>
         </Card.Content>
         </Card>
   )
}

export default RestaurantCard 