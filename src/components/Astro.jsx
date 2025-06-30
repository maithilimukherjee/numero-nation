import React, { useState } from 'react';
import './Astro.css';
import { useNavigate } from 'react-router-dom';
const Astro = () => {

const [name, setName] = useState('');
const [dob, setdob] = useState('');
const navigate = useNavigate();

const handleSubmit = () => {
  if(!name || !dob){
    alert('please fill in all fields properly');
    return;
  }
 const dobDigits = dob.replaceAll('-', '').split('').map(Number);
 navigate('/grid', { state: { name, dob, dobDigits } });
}

  return (
    <div className='container'>
      <div className='headingContainer'>
        <h3>enter your details</h3>
      </div>

      <div className='formContainer'>
        <label htmlFor='nameInput'>name</label>
        <input id='nameInput' type='text' placeholder='name' value={name} onChange={(e)=>setName(e.target.value)} />

        <label htmlFor='dateInput'>date of birth</label>
        <input id='dateInput' type='date' value = {dob} onChange={(e)=>setdob(e.target.value)}/>
      </div>

      <div className='buttonContainer'>
        <button className='submitBtn' onClick={handleSubmit}>generate loshu-grid</button>
      </div>

      <footer>brought to you by : maithili mukherjee.</footer>
    </div>
  )
}

export default Astro
