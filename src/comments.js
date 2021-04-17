import React, { useState } from 'react';

function Comments(props) {
 const [reply, setReply] = useState({});

 const postReply = (id) => {
  const { comments } = props;
  const comment = {
   id: Date.now(),
   text: reply.value,
   name: 'Username',
   children: [],
  };
  if (reply) {
   const newComments = searchComment(comments, id, comment);
   localStorage.setItem('comments', JSON.stringify(newComments));
   props.setComments(newComments);
   setReply('');
  }
 };

 const searchComment = (arr, id, comment) => {
  for (let i = 0; i < arr.length; i++) {
   if (arr[i].id === id) {
    arr[i].children.push(comment);
    break;
   } else {
    searchComment(arr[i].children, id, comment);
   }
  }
  return arr;
 };

 const commentHtml = (arr) => {
  return arr.map((item) => {
   return (
    <div key={item.id} className="comment">
     <div>
      <h5>{item.name}</h5>
      <p>{item.text}</p>
     </div>
     <div className="reply-btn-container">
      <textarea
       rows="1"
       className="reply-text-box"
       placeholder="Reply..."
       value={item.id === reply.id ? reply.value : ''}
       onChange={(e) => setReply({ id: item.id, value: e.target.value })}
      />
      <button className="reply" onClick={() => postReply(item.id)}>
       Reply
      </button>
     </div>
     {commentHtml(item.children)}
    </div>
   );
  });
 };

 const comments = commentHtml(props.comments);

 return <div className="comments-container">{comments}</div>;
}

export default Comments;
