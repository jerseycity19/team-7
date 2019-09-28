import React, { useState } from 'react';

import './Chatroom.css';
import NavBar from '../NavBar'


function Chatroom() {
  const [trendingTopics, setTrendingTopics] = useState(["News1", "News2", "News3", "News4", "News5", "News6", "News7"]);
  console.log(trendingTopics.length);
  return (
    <div className="Chatroom">
      <NavBar />
      <ul className="roomList">
          {trendingTopics.map(i => {
            return <Room roomName={i}></Room>
            })
          }
      </ul>
      <button className="addRoom" onClick={() => {
        trendingTopics.push("test"); 
        setTrendingTopics(() => {
          var temp = trendingTopics.slice();
          return temp;
        })
      }}
        >+</button>
    </div>
  );
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
