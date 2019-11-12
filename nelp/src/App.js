import React from 'react';
import NavBar from './Containers/NavBar'
import './App.css';
import RestaurantContainer from './Containers/RestaurantContainer'
import Header from './Containers/Header'
import Searchbar from './Components/Search'



function App() {

  // console.log(process.env.REACT_APP_SECRET)

  return (
   
    
    <div>  
       <Header/>
       <NavBar/> 
       <Searchbar />

     <RestaurantContainer/>


     
     </div>
     
  );
}

export default App
