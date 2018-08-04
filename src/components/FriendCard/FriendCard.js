import React from "react";
import "./FriendCard.css";


// function handleClick(e) {
//   e.preventDefault();
//   console.log('The image was clicked.');
// }
const FriendCard = props => (
  <div className="card"onClick={() => props.shuffleFriend(props.id)}>
    <div className="img-container">
      <img alt={props.name} src={props.image} />
  
    </div>
    
   
  </div>
);

export default FriendCard;
