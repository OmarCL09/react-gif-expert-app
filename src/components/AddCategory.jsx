import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ onAddCategory }) => {

    const [inputValue, setInputValue] = useState('One Punch Man');

    const onInputChange = ( e ) => {
        e.preventDefault();
        setInputValue( e.target.value );
    }

    const onSubmit = ( e ) => {
        e.preventDefault();
        if(inputValue.trim().length <= 1) return;
        setInputValue('');
        onAddCategory( inputValue.trim());
    }

  return (
    <form onSubmit={ onSubmit } aria-label="form">
        <input 
            type="text" 
            placeholder="Search some gifs"
            value={ inputValue }
            onChange={ onInputChange }
        />
    </form>
  )
}

AddCategory.propTypes = {
    onAddCategory: PropTypes.func.isRequired,
}
