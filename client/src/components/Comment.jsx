import React, { useState } from 'react';
const moment = require('moment')

function Comment(props) {
  console.log(props.comment.date.toString())

  return (
    <div>
      {props.comment.comment}
    </div>
  )
}

export default Comment;