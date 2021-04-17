import React, { useState } from 'react';

function CommentForm(props) {
 const [comment, setComment] = useState('');

 const submit = () => {
  const obj = {
   id: Date.now(),
   name: 'Username',
   text: comment,
   children: [],
  };
  const comments = props.comments;
  if (comment) {
   const addComment = [...comments, obj];
   localStorage.setItem('comments', JSON.stringify(addComment));
   props.setComments(addComment);
   setComment('');
  }
 };

 return (
  <div className="form-container">
   <textarea
    rows="4"
    className="text-box"
    cols="50"
    placeholder="Enter your comment..."
    value={comment}
    onChange={(e) => setComment(e.target.value)}
   />
   <div className="post-btn-container">
    <button className="post-btn" onClick={submit}>
     Post
    </button>
   </div>
  </div>
 );
}

export default CommentForm;
