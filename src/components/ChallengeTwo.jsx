import React, { useEffect, useState } from "react";

const studentList = [
  "Randall Malfoy",
  "Kvothe Black",
  "Chun Zorander",
  "Leomund Ridcully",
  "Rary Stibbons",
  "Gandalf Dresden",
  "Zeddicus Doom",
];

function ChallengeTwo() {
  //declare the states
  const [students, setStudents] = useState([]);
  
  //a lifecycle method will execute when the page has loaded (this will only run once)
  useEffect(() => {

  }, [students]);

  //random button handler
  //shuffle the array and set the state
  let shuffleArry;
  const randomButtonHandler = () => {
    function shuffle(array) {
      for (let i = array.length - 1; i >= 0; i--) {
        let rand = Math.floor(Math.random() * (i + 1));
        [array[i], array[rand]] = [array[rand], array[i]];
      }
      return array;
    }
    shuffleArry = shuffle(studentList);
    setStudents(shuffleArry);
    console.log(students);
  };

  return (
    <div>
      <h2>Challenge 2</h2>
      <div className="msg">
        <ul>
          {/* display the list of students by iterating through the array */}
          {students.map((student, index) => (
            <li key={index}>{[...student]}</li>
          ))}
        </ul>
      </div>
      <button className="btn large" onClick={randomButtonHandler}>
        Randomize
      </button>
    </div>
  );
}

export default ChallengeTwo;
