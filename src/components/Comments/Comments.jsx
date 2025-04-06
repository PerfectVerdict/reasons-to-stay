import {useState} from 'react';
import './style.css';
import Form from '../Form/Form.jsx'  
function Comments({comments}) {
  return (
    <div>
      {comments.map((comment, index) => {
        return(
          <div key={index} className="comment-container">
            <p className="actual-comment">{comment}</p >
          </div>
        )
      })}
    </div>

  );
}
export default Comments;
