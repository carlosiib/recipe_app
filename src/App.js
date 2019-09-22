import React,{useEffect, useState} from 'react';
import Recipe from './Recipe';
import './App.css';

const App= () => {

  const APP_ID= "45197321";
  const APP_KEY = "f55abdbaed4e343d9de311cd6e17dd01";
  
  //state
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');

  //funcion que se inicializa cuando se hace un re-render
  useEffect(()=>{
    getRecipes();
  },[]);
  
  //fetch recipes
  const getRecipes = async () =>{
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  };

  //input search
  const updateSearch = e =>{
    //value of the input
    setSearch(e.target.value);
  }

  return (
    <div className="App">
      <form className="search-form">
        <input 
          className="search-bar" 
          type="text"
          //ingreso de datos en input
          value={search}
          //metodo para poder buscar
          onChange={updateSearch}
          />
        <button 
          className="search-button" 
          type="submit">Buscar
        </button>
       
      </form>
      {recipes.map(recipe =>(
        <Recipe
        key={recipe.recipe.label}
        title={recipe.recipe.label}
        calories={recipe.recipe.calories}
        image={recipe.recipe.image}/>
      ))}
    </div>
  );
}

export default App;
