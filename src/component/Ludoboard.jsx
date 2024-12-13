import React from "react";
import { useState } from "react";
import "./Ludoboard.css";

const Ludoboard = () => {
  let [move, setMove] = useState({
    blue: 0,
    yellow: 0,
    red: 0,
    green: 0,
  });
  let [arr, setArr] = useState(["noMove"]);

  let updateBlue = () => {
    setMove((prevMove) => {
      return { ...prevMove, blue: prevMove.blue + 1 };
    });
    setArr((preArr) => {
      const newArr = preArr.slice(0, -1); // Remove the last item
      const moveCount = move.blue + 1; // Get the updated yellow move count
      return [...newArr, `BlueMove${moveCount}`]; // Add "YellowMove" with updated move count
    });
  };
  let updateYellow = () => {
    setMove((prevMove) => {
      return { ...prevMove, yellow: prevMove.yellow + 1 };
    });
    setArr((preArr) => {
      const newArr = preArr.slice(0, -1); // Remove the last item
      const moveCount = move.yellow + 1; // Get the updated yellow move count
      return [...newArr, `YellowMove${moveCount}`]; // Add "YellowMove" with updated move count
    });
  };
  let updateGreen = () => {
    setMove((prevMove) => {
      return { ...prevMove, green: prevMove.green + 1 };
    });
    setArr((preArr) => {
      const newArr = preArr.slice(0, -1); // Remove the last item
      const moveCount = move.green + 1; // Get the updated yellow move count
      return [...newArr, `greenMove${moveCount}`]; // Add "YellowMove" with updated move count
    });
  };
  let updateRed = () => {
    setMove((prevMove) => {
      return { ...prevMove, red: prevMove.red + 1 };
    });
    setArr((preArr) => {
      const newArr = preArr.slice(0, -1); // Remove the last item
      const moveCount = move.red + 1; // Get the updated yellow move count
      return [...newArr, `RedMove${moveCount}`]; // Add "YellowMove" with updated move count
    });
  };
  return (
    <div>
      <h1>GAME BEGAIN</h1>
      <div>
        <h2>{arr}</h2>
        <div className="board">
          <div className="color">
            <p>Blue Move ={move.blue} </p>
            <button style={{ backgroundColor: "blue" }} onClick={updateBlue}>
              +1
            </button>
          </div>
          <div className="color">
            <p>Yellow Move ={move.yellow} </p>
            <button
              style={{ backgroundColor: "yellow" }}
              onClick={updateYellow}
            >
              +1
            </button>
          </div>
          <div className="color">
            <p>Green Move ={move.green} </p>
            <button style={{ backgroundColor: "green" }} onClick={updateGreen}>
              +1
            </button>
          </div>
          <div className="color">
            <p>Red Move ={move.red} </p>
            <button style={{ backgroundColor: "red" }} onClick={updateRed}>
              +1
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ludoboard;
