import React, { useEffect, useState } from 'react';
import CommentForm from './commentForm';
import Comments from './comments';
import './App.css';

function App() {
 const [comments, setComments] = useState([]);

 useEffect(() => {
  const comments = JSON.parse(localStorage.getItem('comments'));
  if (comments) {
   setComments(comments);
  } else {
   localStorage.setItem('comments', JSON.stringify([]));
  }
 }, []);

 return (
  <div className="app">
   <CommentForm comments={comments} setComments={setComments} />
   {comments.length > 0 && (
    <Comments comments={comments} setComments={setComments} />
   )}
  </div>
 );
}

export default App;
