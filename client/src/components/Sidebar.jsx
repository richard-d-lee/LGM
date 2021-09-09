import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Sidebar(props) {
  return (
    <div>
      <div id="mySidebar" className="sidebar">
        <a href="javascript:void(0)" className="closebtn" onClick={props.close}>&times;</a>
        <a href="/">Artwork</a>
        <Link to="/simulationstation" onClick={props.close}>
          Simulation Station Podcast
        </Link>
        <Link to="/crispyscollections" onClick={props.close}>
          Crispy's Collections
        </Link>
        <a href="#">S/D/S</a>
        <Link to="/forum" onClick={props.close}>
          Forum
        </Link>
        <a href="#">Other Content</a>
        <Link to="/about">
          About Us
        </Link>
      </div>
      <div id="main">
        <button className="openbtn" onClick={props.open}>&#9776; </button>
      </div>
    </div>
  )
}

export default Sidebar;