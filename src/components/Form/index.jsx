import {useState} from 'react';
import './style.css';

function Form() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([])
  const handleInputChange = (e) => {
    const { value } = e.target;
    setMessage(value)
  } 
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (message.trim() === '') return;
    setMessages([...messages, message])
    console.log(message)
    console.log(messages)
  }


  return (
    <>
      <div className="container"> 

        <form className='form' onSubmit={handleFormSubmit}>
        <h4>Insert encouraging message</h4>
          <input
            value={message}
            name="message"
            onChange={handleInputChange}
            type="text"
            placeholder="I hope you have a lovely day!"
          />
          <button type="submit">Submit</button>
        </form>
        <div className='messages'>
          {messages.map((msg,index) => {
            <div key={index} className='message'>
              <p>{msg}</p>
            </div>
          })}
        </div>
      </div>
    </>
  ) 
}
export default Form;
