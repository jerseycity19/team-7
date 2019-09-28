import React, { useState } from 'react';

import './Chatroom.css';
import NavBar from '../NavBar'
import Popup from '../Popup';

function myFunction() {
  var feedback = prompt("What Topic would you like to open up for discussion?", "");
  return feedback;
}

function Chatroom() {
  const hangoutLink = 'http://hangouts.google.com/start';
  const [trendingTopics, setTrendingTopics] = useState([]);
  const [firstRun, setFirstRun] = useState(0);

  if(firstRun == 0){
    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=57de0f2b75c949ec819d97fd50dc1308')
    .then(res => res.json())
    .then((data) => {
        console.log(data);
        var articles = data.articles;
        var titles = [];
        for(var i = 0; i < 7; i++){
            titles.push({title: articles[i].title, count: 0, link: hangoutLink});
        }
        setTrendingTopics(titles);
    })
    .catch(console.log)
    setFirstRun(1);
  }

  return (
    <div className="Chatroom">
      <NavBar />
      <h1>Get the conversation started!</h1>
      <h3>Number of users online: <span>12</span></h3>
      <ul className="roomList">
          {trendingTopics.map(i => {
            return <Room roomName={i.title} roomCount={i.count} link={i.link}></Room>
            })
          }
      </ul>
      <button className="addRoom" onClick={() => {
        var topic = myFunction();
        trendingTopics.push({title:topic, link: hangoutLink, count:0} ); 
        setTrendingTopics(() => {
          var temp = trendingTopics.slice();
          return temp;
        });
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
      <div>  
        <li>
            <p className="room"><span>{this.state.roomName}</span><button className = {this.state.roomCount == 0 ? "empty" : this.state.roomCount > 5 ? "full" : "occupied"} type="button" onClick= {() =>{
                  if(this.state.roomCount <= 5) {
                    var win = window.open(this.state.link);
                    this.setState({roomCount: this.state.roomCount+1});
                  }
                }
              } >{this.state.roomCount == 0 ? "Start" : this.state.roomCount == 6 ? "full" : "Join"}</button></p>          
            <p>In room: {this.state.roomCount}</p>
            <p>Duration: 0:00</p>
        </li>
      </div>
    );
  }
}

export default Chatroom;
