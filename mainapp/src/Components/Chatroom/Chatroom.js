import React, { useState } from 'react';

import './Chatroom.css';
import NavBar from '../NavBar'

// function Counter(){
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <button onClick={() => setCount(count + 1)}>
//       </button>
//     </div>
//   );
// }

function Chatroom() {
  const [trendingTopics, setTrendingTopics] = useState([{title: "News1",count:0} ,{title: "News2",count:0}, {title: "News3",count:0}, {title: "News4",count:0}, {title: "News5",count:0}, {title: "News6",count:0}, {title: "News7",count:0}]);
  return (
    <div className="Chatroom">
      <NavBar />
      <ul className="roomList">
          {trendingTopics.map(i => {
            return <Room roomName={i.title} roomCount={i.count}></Room>
            })
          }
      </ul>
      <button className="addRoom" onClick={() => {
        trendingTopics.push({title:"test", count:0} ); 
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
      roomCount: props.roomCount
    }
  }

  render() {
    return(
      <li>
          <p className="room"><span>{this.state.roomName}</span><button type="button" onClick= {() =>{ 
              this.setState({roomCount: this.state.roomCount+1});
              }
            } >Join</button></p>          
          <p>In room: {this.state.roomCount}</p>
          <p>Duration: 0:00</p>
      </li>
    );
      
  }
}

export default Chatroom;
