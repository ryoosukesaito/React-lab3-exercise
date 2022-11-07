import React, { Component } from 'react';
//import images
import ImageLeft from '../assets/look-left.jpeg';
import ImageRight from '../assets/look-right.jpeg';


class ChallengeOne extends Component {
  //   //declare the state here
  //   state = {
  //   };

  //   //click left/right button handler goes here
  //   setImage(dir) {
  //     if(dir == left){
  //       imageLeft()
  //     }
  //     if(dir == right) {
  //       imageRight()
  //     }
  //     else{
  //       return this.imageLeft
  //     }
  //   }


  //   imageLeft(left) {
  //     return this.imageLeft
  //   }
  //   imageRight(right) {
  //     return this.imageRight
  //   }

  //   render() {
  //     return (
  //       <>
  //         <h2>Challenge 1</h2>
  //         <div className="msg">
  //           <img
  //             className="ch1"
  //             src={this.setImage(dir)}
  //             alt=""
  //           />
  //         </div>
  //         <button className="btn" onClick={this.imageLeft(left)}>⭠</button>
  //         <button className="btn" onClick={this.imageRight(right)}>⭢</button>
  //       </>
  //     );
  //   }
  // }


  //declare the state here
  state = {
    somebooleanvalue: undefined
  };

  //click left/right button handler goes here
  handleDirection = (dir) => {
    // console.log(dir)
    if(dir === "left") {
      // this.state.somebooleanvalue = true;
      this.setState({somebooleanvalue: true})
    }
    if(dir === "right") {
      // this.state.somebooleanvalue = false;
      this.setState({somebooleanvalue: false})
    }
    console.log(this.state.somebooleanvalue);
  }

  render() {
    // let somebooleanvalue = false;
    return (
      <>
        <h2>Challenge 1</h2>
        <div className="msg">
          <img
            className="ch1"
            src={this.state.somebooleanvalue ? ImageLeft : ImageRight}
            alt=""
          />
        </div>
        <button className="btn" onClick={() => this.handleDirection("left")}>⭠</button>
        <button className="btn" onClick={() => this.handleDirection("right")}>⭢</button>
      </>
    );
  }
}

export default ChallengeOne;