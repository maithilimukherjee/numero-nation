import React from 'react'
import './Astro.css'

const Astro = () => {
  return (
    <div className='container'>
      <div className='headingContainer'>
        <h3>enter your details</h3>
      </div>

      <div className='formContainer'>
        <label htmlFor='nameInput'>name</label>
        <input id='nameInput' type='text' placeholder='name' />

        <label htmlFor='dateInput'>date of birth</label>
        <input id='dateInput' type='date' />
      </div>

      <div className='buttonContainer'>
        <button className='submitBtn'>generate loshu-grid</button>
      </div>

      <footer>brought to you by : maithili mukherjee.</footer>
    </div>
  )
}

export default Astro
