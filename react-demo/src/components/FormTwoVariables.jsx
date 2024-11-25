import React, { useState } from 'react'

const FormTwoVariables = () => {
    
    const [name, setName] = useState('Taylor');
    const [age, setAge] = useState(42);

  return (
    <>
      <input 
      type="text"
      value={name}
      onChange={e => setName(e.target.value)}
      />
      <button onClick={() => setAge(age + 1)}>
        Increment age
      </button>
      <p>Hello, {name}. You are {age}.</p>
      <button onClick={() => {
        setName('Chavdar');
        setAge(47)
      }}>
         Reset
      </button>
        
    </>
  );
}

export default FormTwoVariables