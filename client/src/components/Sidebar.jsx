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
        <a href="#">Reviews</a>
        <Link to="/simulationstation">
                    Simulation Station Podcast
        </Link>
        <Link to="/crispyscollections">
                    Crispy's Collections
        </Link>
        <a href="#">S/D/S</a>
        <a href="#">Forum</a>
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