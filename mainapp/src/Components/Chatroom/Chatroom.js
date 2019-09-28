import React, { useState } from 'react';

import './Chatroom.css';
import NavBar from '../NavBar'

const trendingTopics = ["News1", "News2", "News3", "News4", "News5", "News6", "News7"];

function Chatroom() {
  const [count, setCount] = useState([]);
  return (
    <div className="Chatroom">
      <NavBar />
      <ul className="roomList">
          {trendingTopics.map(i => {
            return <Room roomName={i}></Room>
            })
          }
      </ul>
      <button type="button" className="addRoom">+</button>
    </div>
  );
}

function submitButtonStyle(_this) {
  _this.style.backgroundColor = "red";
}


class Room extends React.Component {
  constructor(props) {
    super(props);
    let name = props.roomName;
    this.state = { //React garantees this will live throughout our object. This object lives. 
      roomName: props.roomName
    }
  }

  render() {
    return(
      <li>
          <p className="room"><span>{this.state.roomName}</span><button type="button">Start</button></p>
          <p>In Room: 0</p>
          <p>Duration: 0:00</p>
      </li>
    );
      
  }
}

export default Chatroom;
