import {useState} from 'react';
import './style.css';

function Form({handleFormSubmit}) {
  // local state for the input value
  const [comment, setComment] = useState('');

  const handleInputChange = (e) => {
    setComment(e.target.value);
  } 

  const handleSubmit = (e) => {
    e.preventDefault()
    setComment(e.target.value)
    handleFormSubmit(comment)
  }

  return (
    <>
      <div className="container"> 

        <form className='form' onSubmit={handleSubmit}>
          <h4>Share something positive :)</h4>
          <input
            value={comment}
            name="message"
            onChange={handleInputChange}
            type="text"
            placeholder="I hope you have a lovely day!"
            className="p-3"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  ) 
}
export default Form;
