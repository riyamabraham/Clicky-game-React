import React from "react";
import "./Title.css";


const Title = props => (
    <div className="navbar">
      <div className="title">{props.children}</div>
      <div className="game">{props.game}</div>
      <div className="scores">
        Score: {props.score} | Highscore: {props.highscore}
      </div>
    </div>
  );
export default Title;
