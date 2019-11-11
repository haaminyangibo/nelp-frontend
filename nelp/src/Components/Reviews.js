import React from 'react'
import { Card} from 'semantic-ui-react'


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

         this.state.reviews.map( review => <Card description= {review.text}/>)
             
    )



}
}



export default Reviews 

