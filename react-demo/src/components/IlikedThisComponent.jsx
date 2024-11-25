import React, { useState } from 'react'

const IlikedThisComponent = () => {
    const[liked, setLiked] = useState(true);

    function handleChange(e) {
        setLiked(e.target.checked);
    }

  return (
    <div>
        <label>
            <input 
              type="checkbox"
              checked={liked}
              onChange={handleChange}
            />
            I liked this
        </label>
        <p>You {liked ? 'liked' : 'did not like'} this.</p>
    </div>
  )
}

export default IlikedThisComponent