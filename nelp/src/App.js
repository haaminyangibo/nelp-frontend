import React from 'react';
import NavBar from './Containers/NavBar'
import './App.css';
import RestaurantContainer from './Containers/RestaurantContainer'
import Header from './Containers/Header'



function App() {
  return (
   
    
    <div>  
      <Header/>
       <NavBar/> 
     <RestaurantContainer/>
     
     </div>
     
  );
}

export default App
