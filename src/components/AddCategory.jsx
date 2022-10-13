import { useState } from 'react';

export const AddCategory = ({ onAddCategory }) => {

    const [inputValue, setInputValue] = useState('One Punch Man');

    const onInputChange = ( e ) => {
        e.preventDefault();
        setInputValue( e.target.value );
    }

    const onSubmit = ( e ) => {
        e.preventDefault();
        if(inputValue.trim().length <= 1) return;
        onAddCategory( inputValue.trim());
        setInputValue('');
    }

  return (
    <form onSubmit={ onSubmit }>
        <input 
            type="text" 
            placeholder="Search some gifs"
            value={ inputValue }
            onChange={ onInputChange }
        />
    </form>
  )
}
