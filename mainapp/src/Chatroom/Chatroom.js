import React from 'react';

import './Chatroom.css';

function Chatroom() {
  return (
    <div className="Chatroom">
      <ul className="roomList">
        <Room></Room>
        <Room></Room>
        <Room></Room>
        <Room></Room>
        <Room></Room>
        <Room></Room>
        <Room></Room>
        <Room></Room>
      </ul>
    </div>
  );
}

function Room(){
    return(
    <li>
        <p className="room"><span>Current Event Test Thing</span><button type="button">Start</button></p>
        <p>In Room: 0</p>
    </li>
    );
}

export default Chatroom;
