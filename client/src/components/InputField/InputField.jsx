import React from 'react';

import './InputField.scss';

function InputField({type='text', name, labelText, value, maxLength, onChange, onSubmit}) {
  const defaultOnSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      { labelText && 
      <label 
        htmlFor={name}
        className='input-label'
      >
        {labelText}
      </label>
      }
      <input 
        className='input-field'
        type={type} 
        name={name ? name : ''} 
        value={value} 
        onChange={onChange}
        maxLength={maxLength ? maxLength : Number.MAX_SAFE_INTEGER}
        onSubmit={onSubmit ? onSubmit : defaultOnSubmit}
      />
    </>
  );
}

export default InputField;