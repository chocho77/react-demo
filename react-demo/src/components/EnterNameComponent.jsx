import React, { useState } from 'react'

const EnterNameComponent = () => {
    const [text, setText] = useState('hello');

    function handleChange(e) {
        setText(e.target.value);

    }
  return (
    <div>
        EnterNameComponent
        <input 
        type="text" 
        value={text}
        onChange={handleChange}
        />
        <p>You typed: {text}</p>
        <button onClick={()=> setText('hello')}>
            Reset
        </button>

    </div>
  )
}

export default EnterNameComponent