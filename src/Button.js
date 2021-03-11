import React from 'react';
const axios = require('axios');
const apiCall = axios.create({
  baseURL: `http://localhost:3001`
});


function Button(props) {

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        apiCall.get('/').then(res => props.setMessage(res.data))
      }
        
      }
    >
      Click Me
    </button>
    
  )
}

export default Button;