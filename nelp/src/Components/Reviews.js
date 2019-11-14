import React from 'react'
import { Comment} from 'semantic-ui-react'


class Reviews extends React.Component {

state = {
    reviews: []
}


componentDidMount(){
 return fetch(`http://localhost:3000/restaurants/${this.props.id}/reviews`).then(resp=> resp.json()).then(reviewData => this.setState({
        
    reviews: reviewData["reviews"]
    }))}

    
render() {
    return(

         this.state.reviews.map( review => 
         
         
         <Comment >
            <Comment.Content>
            <div class= "ui divider"> </div>
            <Comment.Author as='a'>{review.user.name}</Comment.Author>
            <Comment.Metadata>
                <div>Reviewed at: {review.time_created} </div>
             </Comment.Metadata>
             <Comment.Metadata>
                <div>Rating: {review.rating} </div>
             </Comment.Metadata>
            <Comment.Text>{review.text}</Comment.Text>
             </Comment.Content>
         </Comment>)
             
    )



}
}



export default Reviews 

