import React,{useEffect, useState} from 'react';
import './App.css';

const App= () => {

  const APP_ID= "45197321";
  const APP_KEY = "f55abdbaed4e343d9de311cd6e17dd01";


  //funcion que se inicializa cuando se hace un re-render
  useEffect(()=>{
    console.log('Effect correct');
  },[]);
  
  //fetch recipes
  const getRecipes = async () =>{
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    console.log(data);
  }

  return (
    <div className="App">
      <form className="search-form">
        <input 
          className="search-bar" 
          type="text"/>
        <button 
          className="search-button" 
          type="submit">Buscar
        </button>
       
      </form>
    </div>
  );
}

export default App;
