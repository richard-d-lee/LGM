import React, { useState } from 'react';

function Sidebar(props) {
    return (
    <div>
      <div id="mySidebar" className="sidebar">
        <a href="javascript:void(0)" className="closebtn" onClick={props.close}>&times;</a>
        <a href="#">Artwork</a>
        <a href="#">Reviews</a>
        <a href="#">Podcasts</a>
        <a className="crispy" href="#">Crispy's Page</a>
        <a href="#">S/D/S</a>
        <a href="#">Forum</a>
        <a href="#">Other Content</a>
        <a href="#">About Us</a>
      </div>
      <div id="main">
        <button className="openbtn" onClick={props.open}>&#9776; </button>
      </div>
    </div>
  )
}

export default Sidebar;