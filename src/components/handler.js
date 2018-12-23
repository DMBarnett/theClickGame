import React, {Component} from "react";
import data from "../images.json";
import ClickGrid from "./clickGrid";
import Navbar from "./navbar"
import Click from "./clicked";
import Jumbo from "./jumbo";

class Handler extends Component{
  state = {
    correct: 0,
    record: 0,
    data
  };

  componentDidMount(){
    this.setState({data: this.rand(this.state.data)});
  }

  continue(input){
    let newRecord = this.state.correct+1
    if(!(newRecord > this.state.record)){
      return newRecord = this.state.record
    };

    this.setState({
      data: this.rand(input),
      correct: this.state.correct+1,
      record: newRecord
    })
  };

  restart(input){
    input = input.map(each =>{
      each.clicked = false;
      return each;
    })
    this.setState({
      data: this.rand(input),
      correct: 0
    })
  };

  rand(foo){
    let currentIndex = foo.length, temp, randomIndex;

    // Knuth Shuffle
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temp = foo[currentIndex];
      foo[currentIndex] = foo[randomIndex];
      foo[randomIndex] = temp;
    }
    return foo;
  };
  
  clickEvent = input =>{
    let guess = false;
    let updateData = this.state.data.map(passed =>{
      let updateImg = (passed);
      if(updateImg.id === input && !updateImg.clicked){
        updateImg.clicked = true;
        guess = true;
      }
      return updateImg
    })
    guess ? this.continue(updateData):this.restart(updateData);
  };

  render(){
    return (
      <div>
        <Navbar correct={this.state.correct} record={this.state.record} />
        <Jumbo />
        <ClickGrid>
          {this.state.data.map(image=>(
            <Click image={image} clickEvent={this.clickEvent}/>
          ))}
        </ClickGrid>
      </div>
    );
  };
}

export default Handler;