import React, { useState } from 'react';

import './Chatroom.css';
import NavBar from '../NavBar'

function Chatroom() {
  const hangoutLink = 'http://hangouts.google.com/start';
  const [trendingTopics, setTrendingTopics] = useState([{title: "News1", link: hangoutLink, count:0} ,{title: "News2", link: hangoutLink, count:0}, {title: "News3", link: hangoutLink, count:0}, {title: "News4", link: hangoutLink, count:0}, {title: "News5", link: hangoutLink, count:0}, {title: "News6", link: hangoutLink, count:0}, {title: "News7", link: hangoutLink, count:0}]);
  return (
    <div className="Chatroom">
      <NavBar />
      <h1>Get the conversation started!</h1>
      <ul className="roomList">
          {trendingTopics.map(i => {
            return <Room roomName={i.title} roomCount={i.count} link={i.link}></Room>
            })
          }
      </ul>
      <button className="addRoom" onClick={() => {
        trendingTopics.push({title:"test", link: hangoutLink, count:0} ); 
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
      roomName: props.roomName, 
      roomCount: props.roomCount,
      link: props.link
    }
  }

  render() {
    return(
      <li>
          <p className="room"><span>{this.state.roomName}</span><button type="button" onClick= {() =>{
              var win = window.open(this.state.link);
              this.setState({link: win.location.href});
              this.setState({roomCount: this.state.roomCount+1});
              }
            } >Start</button></p>          
          <p>In room: {this.state.roomCount}</p>
          <p>Duration: 0:00</p>
      </li>
    );
      
  }
}

export default Chatroom;
