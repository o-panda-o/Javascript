import React,{useEffect,useState} from 'react';
import './App.css';
import Recipe from './Recipe';

const App=()=>{

  const [recipes,setRecipes]=useState([]); 
  const [search,setSearch]=useState('');
  const [query, setQuery]=useState('chicken');


  const APP_ID='b7d66247';
  const APP_KEY='0136409cf62ccc1fcf8f13cb4df1c560';
  const API=`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  useEffect(()=>{
    getRecipes();
  },[query]);

  const getRecipes = async ()=>{
    const response=await fetch(API);
    const data= await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }

  const updateSearch=e=>{
    setSearch(e.target.value);
  }

  const getSearch=e=>{
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <input 
          className="search-bar"  
          value={search} 
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="recipes">
        {recipes.map(recipe=>(
          <Recipe 
            key={recipe.recipe.uri}
            title={recipe.recipe.label}  
            calories={recipe.recipe.calories} 
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  ); 
}

export default App;
