import React, { useState } from 'react'

const ClickCountComponent = () => {
    const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
       <div>ClickCountComponent</div>
       <button onClick={handleClick}>
           You pressed me {count} times
       </button>
    </>
    
  )
}

export default ClickCountComponent