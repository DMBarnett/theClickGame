import React, {Component} from "react";
import data from "../../images.json";
import ClickGrid from "../clickGrid";
import Header from "../header"
import Click from "../clicked";
import Jumbo from "../jumbo";

class Handler extends Component{
  state = {
    correct: 0,
    record: 0,
    data
  };

  componentDidMount(){
    this.setState({data: this.rand(this.state.data)});
  }

  continue=(input)=>{
    let {record, correct} = this.state
    const newCorrectCount = correct+1;
    
    let newRecord = Math.max(newCorrectCount, record)

    this.setState({
      correct: newCorrectCount,
      data: this.rand(input),
      record: newRecord
    });
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
      let foo = {...passed}
      if(foo.id === input && !foo.clicked){
        foo.clicked = true;
        guess = true;
      }
      return foo
    });
    console.log(input);
    console.log(updateData);
    guess ? this.continue(updateData):this.restart(updateData);
  };

  render(){
    console.log(this.state)
    return (
      <div>
        <Header correct={this.state.correct} record={this.state.record} />
        <Jumbo />
        <ClickGrid>
          {this.state.data.map(image=>(
            <Click image={image} clik={this.clickEvent}/>
          ))}
        </ClickGrid>
      </div>
    );
  };
}

export default Handler;