import "./App.css";
import React, { useState } from "react";
let clickedImage = [];

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [imageOrder, setImageOrder] = useState([...Array(10).keys()]);

  function loadImage() {
    const images = [
      {
        imageName: "Tom",
        link: "./image/1.jpg",
        id: 1,
      },
      {
        imageName: "Tim",
        link: "./image/2.jpg",
        id: 2,
      },
      {
        imageName: "Tam",
        link: "./image/3.jpg",
        id: 3,
      },
      {
        imageName: "John",
        link: "./image/4.jpg",
        id: 4,
      },
      {
        imageName: "Alex",
        link: "./image/5.jpg",
        id: 5,
      },
      {
        imageName: "Oliver",
        link: "./image/6.jpg",
        id: 6,
      },
      {
        imageName: "Alexa",
        link: "./image/7.jpg",
        id: 7,
      },
      {
        imageName: "Cat",
        link: "./image/8.jpg",
        id: 8,
      },
    ];
    return (
      <div className="container text-center">
        <div className="row">
          {images.map((image) => (
            <div className="d-flex justify-content-center col-3">
              <img
                className="card"
                key={image.id}
                src={image.link}
                alt={image.imageName}
                onClick={() => {
                  updateScore(image.id);
                }}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  function updateScore(imageId) {
    if (clickedImage.includes(imageId)) {
      updateBestScore();
      return;
    }
    clickedImage.push(imageId);
    setScore(score + 1);
    shuffle(clickedImage);
  }

  function updateBestScore() {
    setBestScore(Math.max(score, bestScore));
    setScore(0);
    clickedImage = [];
  }

  return (
    <div className="App container">
      <div className="h3">
        <div>Current score: {score}</div>
        <div>Best score: {bestScore}</div>
      </div>
      {loadImage(updateScore)}
    </div>
  );
}

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
}

export default App;
