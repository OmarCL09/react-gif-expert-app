import React, { useState } from 'react'
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch Man']);

    const onAddCategory = ( newCategory ) => {
        if( categories.includes(newCategory)) return;
        
        setCategories([ newCategory, ...categories ]);
    }

    const onDeleteCategory = (categorieToDelete) => {
        setCategories(categories.filter( category => category !== categorieToDelete));
    }

  return (
    <>

        <h1>GifExpertApp</h1>

        <AddCategory onAddCategory = { onAddCategory }/>

        {
            categories.map( ( category ) => (
                <GifGrid key={ category } category={ category } onDeleteCategory={ onDeleteCategory }/>
            ))
        }
    </>
  ) 
}
