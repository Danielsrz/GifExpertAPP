import React, { useState} from 'react'
import PropTypes from 'prop-types';

const AddCategory = ( {setCategories} ) => {
   
    const [inputValue, setInputValue] = useState ('Buscar')
    
    const handleInputChange = (e)=>{
        setInputValue(e.target.value);
   }

    const handleSubmit = (e) => {
       e.preventDefault();

       if(inputValue.trim().length > 2){
           setCategories( cats => [inputValue, ...cats]);
           setInputValue('');
       }
   }

   const handleClick = (e) => {
       setInputValue('');
   }


    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                onFocus = { handleClick }
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
    )
};

export default AddCategory;

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}