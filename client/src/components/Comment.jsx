import React, { useState } from 'react';
const moment = require('moment')

function Comment(props) {

  return (
    <div>
      {props.comment.comment}
    </div>
  )
}

export default Comment;