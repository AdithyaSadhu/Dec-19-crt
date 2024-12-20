import React from "react";
import NavBar from "./NavBar";

export default function Photos() {
  const places = [
    {
      name: "TajMahal",
      city: "Agra",
      description:
        "This is a longer card with supporting text below as a natural lead-in to additional content",
      url: "https://skift.com/wp-content/uploads/2022/06/GettyImages-1208049833-scaled-e1654782364566-1024x682.jpg",
    },

    {
      name: "CharMinar",
      city: "Hyd",
      description:
        "This is a longer card with supporting text below as a natural lead-in to additional content",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Charminar_Hyderabad_1.jpg/330px-Charminar_Hyderabad_1.jpg",
    },
    {
      name: "Effel Tower",
      city: "Paris",
      description:
        "This is a longer card with supporting text below as a natural lead-in to additional content",
      url: "https://media.gettyimages.com/id/1492597085/photo/paris-skyline-with-eiffel-tower-on-a-sunny-day-wide-angle-view-france.jpg?s=2048x2048&w=gi&k=20&c=4vXmjZiVnLm0PTudRrjXxEmxY3sn0NA5951eMIPoycM=",
    },
    {
      name: "RedFort",
      city: "Delhi",
      description:
        "This is a longer card with supporting text below as a natural lead-in to additional content",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3HzUhW-sJh4sBRncJTVgiF5ifJ1N3W8LIDA&s",
    },
  ];

  return (
    <div>
      <NavBar />

      <div className="row row-cols-1 row-cols-md-2 g-4">
        {places.map((place) => (
          <div className="col">
            <div className="card">
              <img src={place.url} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{place.name}</h5>
                <p className="card-text">{place.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}