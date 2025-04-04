import {useState} from 'react';

function Form() {
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    const { message, value } = e.target;
    console.log(message)
  } 
    const handleFormSubmit = (e) => {
      e.preventDefault();
      setMessage('')


      
    }
  




  return (
    <form className='form' onSubmit={handleFormSubmit}>
      <input
        value={message}
        name="message"
        onChange={handleInputChange}
        type="text"
        placeholder="Insert encouraging message"
      />

    </form>
  ) 
}
  export default Form;
