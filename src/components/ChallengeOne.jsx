import React, {useState} from "react";
import left from '../assets/look-left.jpeg';
import right from '../assets/look-right.jpeg';

function ChallengeOne() {
  //declare the state here
  const [image, setImage] = useState(left);
  //click left/right button handler goes here
  const leftEyeButtonHandler = () => {
    setImage(left);
  }
  const rightEyeButtonHandler = () => {
    setImage(right);
  }

  return (
    <div>
      <h2>Challenge 1</h2>
      <div className="msg">
        <img className="ch1" src={image} alt="" />
      </div>
      <button className="btn" onClick={leftEyeButtonHandler}>⭠</button>
      <button className="btn" onClick={rightEyeButtonHandler}>⭢</button>
    </div>
  );
}

export default ChallengeOne;
