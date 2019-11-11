// import React, { Component } from 'react'
// import { Search, Grid, Header, Segment } from 'semantic-ui-react'
// import RestaurantList from './RestaurantList'





// class Searchbar extends React.Component {

//     componentDidMount(){
//         return fetch("http://localhost:3000/restaurants").then(resp=> resp.json()).then( data => this.setState({

//                     options: data["businesses"]
//                     }))

//     }
//     state = { isLoading: false, results: [], value: '' , options: []}

//     handleResultSelect = (e, { result }) => this.setState({ value: result.title })
  
//     handleSearchChange = (e, { value }) => {
//       this.setState({ isLoading: true, value })
  
//       setTimeout(() => {
//         if (this.state.value.length < 1) return this.setState({
//             isLoading: false, results: [], value: '' , options: []

//         })
  
//         const re = new RegExp(this.state.options.escapeRegExp(this.state.value), 'i')
//         const isMatch = (result) => re.test(result.title)
  
//         this.setState({
//           isLoading: false,
//           results: this.state.options.filter(this.state.options, isMatch),
//         })
//       }, 300)
//     }
  
//     render() {
//       const { isLoading, value, results } = this.state
  
//       const source = this.state.options
//       return (
//         <Grid>
//           <Grid.Column width={6}>
//             <Search
//               loading={isLoading}
//               onResultSelect={this.handleResultSelect}
//               onSearchChange= {
//                   _.debounce(this.handleSearchChange, 500, {
//                 leading: true,
//               })}
//               results={results}
//               value={value}
//               {...this.props}
//             />
//           </Grid.Column>
//           <Grid.Column width={10}>
//             <Segment>
//               <Header>State</Header>
//               <pre style={{ overflowX: 'auto' }}>
//                 {JSON.stringify(this.state, null, 2)}
//               </pre>
//               <Header>Options</Header>
//               <pre style={{ overflowX: 'auto' }}>
//                 {JSON.stringify(this.state.options, null, 2)}
//             </pre>
//           </Segment>
//         </Grid.Column>
//       </Grid>
//     )
//   }


























//     // state = {
//     //     options :[],
//     //     {
//     //         "isLoading": false,
//     //         "results": [],
//     //         "value": ""
//     //       }

//     // }

//     // componentDidMount(){
//     //     return fetch("http://localhost:3000/restaurants").then(resp=> resp.json()).then( data => this.setState({

//     //         options: data["businesses"]
//     //         }))

//     //     }

//     // render( ){

//     //     return(

//     //         <Search
//     //         placeholder ="Search for a Restaurant"
//     //         fluid
//     //         selction
//     //         options ={this.state.options}
//     //         />
//     //     )
//     // }


// }

// export default Searchbar