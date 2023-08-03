import React, { useState } from 'react';
import './main.css'

 export function Header(){
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [message, setMessage] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === '') {
      setMessage('Please fill in the name input.');
    } else if (age === '') {
      setMessage('Please fill in the age input.');
    } else if (age < 0) {
      setMessage('invalid age.');
    } else if (age >= 18) {
      setMessage(`Hello ${name}, your age is over 18.`);
    } else {
      setMessage(`Hello ${name}, your age is under 18.`);
    }
  };
return(
    <div>
      <form action="" onSubmit={handleSubmit}>
       <div className="container">
         <input type="text" placeholder="Enter your name" value={name} onChange={(event)=> setName(event.target.value)}/>
       <input type="number" placeholder="enter your age" value={age} onChange={(event)=> setAge(event.target.value)} />
      <button type="submit">Submit</button> 
      <div className="info">
         <h5>{message}</h5>
      </div>
          
      </div>
        </form>
     </div>
)
 }

