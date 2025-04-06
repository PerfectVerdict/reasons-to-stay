import Form from "./components/Form/Form.jsx"
import Comments from "./components/Comments/Comments.jsx"
import {useState} from 'react';
import './App.css'

function App() {
  const [comments, setComments] = useState([]);
  const handleFormSubmit = (newComment) => {
    setComments([...comments, newComment]);
  }
  // Store the state of the messages we're recieving from Comment component 
  return (
    <>
    <Form handleFormSubmit={handleFormSubmit}/>
      <Comments comments={comments}/>
    </>
  )
}



export default App;
