import React from "react";

function loadImage(updateScore) {
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

export default loadImage;
