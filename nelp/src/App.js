import React from 'react';
import NavBar from './Containers/NavBar'
import './App.css';
import RestaurantContainer from './Containers/RestaurantContainer'
import Header from './Containers/Header'
import Search from './Components/Search'



function App() {

  // console.log(process.env.REACT_APP_SECRET)

  return (
   
    
    <div>  
       <Header/>
       <NavBar/> 

       {/* <Search /> */}

     <RestaurantContainer/>


     
     </div>
     
  );
}

export default App
