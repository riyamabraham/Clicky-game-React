import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";


class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    score: 0,
    highscore: 0,
    game:"Click to begin",
    correct:"You guessed correct",
    incorrect:"You guessed wrong"
  };

  gameOver = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({ game:this.state.incorrect,highscore: this.state.score }, function () {
        console.log(this.state.highscore);
      });
    }
    this.state.friends.forEach(friend => {
      friend.count = 0;
    });
    
    alert(`Game Over :( \nscore: ${this.state.score}`);

    this.setState({ score: 0 });
    return true;
    
  }

  shuffleFriend = id => {
    this.state.friends.find((o, i) => {
      if (o.id === id) {
        console.log(friends[i].count);
        if(friends[i].count === 0){
          
          friends[i].count = friends[i].count + 1;
          this.setState({game:this.state.correct,score : this.state.score + 1}, function(){
            console.log(this.state.score);
          });
          this.state.friends.sort(() => Math.random() - 0.5)
          return true; 
        } else {
          this.gameOver();
        }
      }
    });
    
  }




  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title game={this.state.game}score={this.state.score} highscore={this.state.highscore}>Clicky Game</Title>

        <div className="jumbotron">
          <h1 className="display-4">Clicky Game !!</h1>
          <p className="lead">Click on an image to earn ponts, but don't click on an image more than once ...</p>
        </div>
        
        {this.state.friends.map(friend => (
          <FriendCard
            shuffleFriend={this.shuffleFriend}
            id={friend.id}
            key={friend.id}
            image={friend.image}

          />
        ))}
      </Wrapper>
    );
  }
}



export default App;
