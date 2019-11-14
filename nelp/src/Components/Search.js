import React from 'react'




class Searchbar extends React.Component {

state = {
        items: ""
    }

    filterList = (event) => {

    this.setState({ items: event.target.value})
}

    handleSubmit = (event) => {
    event.preventDefault()
    // console.log(event.target.value)
    // API.getRestaurants(this.state.items).then(data => this.setState({ initialItems: data}))
    debugger
    let category = this.state.items
    this.props.showSearchResults(category)
    }


    
    render (){
        return(
        <div class = "search">
            <form onSubmit={(e) => {this.handleSubmit(e)}} >
                <input type ="text" placeholder ="search for GOOD restaurants" onChange ={this.filterList} />
            </form>         
        </div>
      
      )
    }
} 

export default Searchbar