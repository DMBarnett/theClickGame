import React from "react";

function Navbar(props){
  return (
    <div>
      <nav className="nabar">
        <ul>
          <li>
            <h3>Clicker Game</h3>
          </li>
          <li>
            Score: {props.correct} || Top Score: {props.record}
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar;