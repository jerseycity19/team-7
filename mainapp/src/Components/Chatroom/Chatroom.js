import React from 'react';

import './Chatroom.css';
import NavBar from '../NavBar'

function Chatroom() {
  return (
    <div className="Chatroom">
      <NavBar />
      <ul className="roomList">
        <Room></Room>
        <Room></Room>
        <Room></Room>
        <Room></Room>
        <Room></Room>
        <Room></Room>
        <Room></Room>
      </ul>
      <button type="button" className="addRoom" onclick="submitButtonStyle(this)">+</button>
    </div>
  );
}

function submitButtonStyle(_this) {
  _this.style.backgroundColor = "red";
}

function Room(){
    return(
    <li>
        <p className="room"><span>Current Event Test Thing</span><button type="button">Start</button></p>
        <p>In Room: 0</p>
        <p>Duration: 0:00</p>
    </li>
    );
}

export default Chatroom;
