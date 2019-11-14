
import React from 'react'
import { Card, Icon, Button } from 'semantic-ui-react'

const RestaurantCard = props => {

   const {restaurant, showCardDetails, saveRestaurant} = props 
   return(
   

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
      <div class = "ui two buttons" text-align="center">
         <Button className="button" color="red" onClick ={()=> saveRestaurant(restaurant.id) } attached ="left">Save</Button> 
         <div></div>
         <Button className="button" color="red" onClick= {()=>showCardDetails(restaurant.id)} attached="right"> See More</Button>
      </div>
         </Card.Content>
         </Card>
   )
}

export default RestaurantCard 