import React from "react";
import {PageHeader} from "react-bootstrap";



function Header(props){
  return (
    <PageHeader>
        Clicker Game
        <small>Score: {props.correct} || Top Score: {props.record}</small>
    </PageHeader>
  )
}

export default Header;