 import React from 'react'
 import style from  './recipe.module.css'
 
 const Recipe=({title,calories,image,ingredients})=>{
     return (
         <div className={style.recipe}>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredient=>(
                    <li className={style.list}>{ingredient.text}</li>
                ))}
            </ol>
            <p><b>Calories:</b> {calories}</p>
            <img className={style.image} src={image} alt="" />
         </div>
     )
 }
 
 export default Recipe;