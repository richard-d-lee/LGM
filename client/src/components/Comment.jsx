import React, { useState } from 'react';

function Comment(props) {
  console.log(props.comment)
  let comment = props.comment
  return (
    <div className="flex-column" id="full-comment">
      <div id="comment-row">
        <div id="comment-date">
          {props.comment.formattedDate || "Unknown Date"}
        </div>
        <div id="comment-username">
          {comment.username}
        </div>
          &nbsp;says: 
      </div>
      <div id="comment-text">
        {comment.comment}
      </div>
    </div>
  )
}

export default Comment;