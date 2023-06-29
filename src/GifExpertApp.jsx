import { useState } from "react";
import { AddCategory, GifGrid } from "./components";
// import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

  // inicializarl como un arreglo
  const [categories, setCategories] = useState(['One Punch']);

  const onAddCategory = (newCategory) => {

    if ( categories.includes(newCategory )) return;

    setCategories( [newCategory,...categories] );

    // setCategories( cat => [...cat,'Valorant']);

    // Error : Hace que mute el objeto
    // setCategories( categories.push('Valorant') );
  }

  return (
    <>
      {/* titulo */}
      <h1>GifExpertApp v2</h1>
      {/* Input */}
      <AddCategory 
        // setCategories={ setCategories }
        onNewCategory = { value => onAddCategory(value) }
      />
      {/* Listado de Gif */}
      {/* <button onClick={ onAddCategory }>Agregar</button> */}
      { 
        categories.map( category => (
            <GifGrid 
              key={ category } 
              category={ category }
            />
        )) 
      }
        {/* Gif Item */}
    </>
  )
}
