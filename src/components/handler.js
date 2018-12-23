import React from "react";
import Component from "react"
import data from "../images.json";
import ClickGrid from "./clickGrid.js";
import Navbar from "./navbar.js"
import Click from "./clicked.js";
import Jumbo from "./jumbo.js";

class Clicker extends Component{
  state = {
    correct: 0,
    record: 0,
    data,
    chosen:[]
  }

  componentDidMount(){
    this.setState({data: this.rand(this.state.data)});
  }

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
  }

  render(){
    return (
      <div>
        <Navbar correct={this.state.correct} record={this.state.record} />
        <Jumbo />
        <ClickGrid>
          {this.images.map(image=>(
            <Click image={image} clickEvent={this.clickEvent}/>
          ))}
        </ClickGrid>
      </div>
    );
  }
}

export default Clicker;