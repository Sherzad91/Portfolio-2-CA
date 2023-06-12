import React, { useEffect, useState } from "react";
import P1 from "../images/por1.png";
import P2 from "../images/por2.png";
import P3 from "../images/por3.png";
import P4 from "../images/por4.png";
import P5 from "../images/por5.png";
import P6 from "../images/about.jpeg";

const collection = [
  {
    image: P1,
    target: "design",
    url: "https://github.com/Sherzad91/Semester-Project-2",
  },
  {
    image: P2,
    target: "design",
    url: "https://github.com/Sherzad91/JavaScript-Frameworks-CA",

  },
  {
    image: P3,
    target: "mobile",
    url: "https://github.com/Sherzad91/Project-Exam-2",

  },
  {
    image: P4,
    target: "front",
    url: "https://github.com/Sherzad91",

  },
  {
    image: P5,
    target: "front",
    url: "https://sunny-starship-4d47df.netlify.app/",

  },
  {
    image: P6,
    target: "front",
    url: "https://github.com/Sherzad91",

  },
];
export default function SharedComponent({id}) {
  const [activeTab, setActiveTab] = useState("all");
  const [images, setImages] = useState(collection);
  useEffect(() => {
    let newCollection = [];
    if (activeTab === "all") {
      newCollection = collection;
    } else {
      newCollection = collection.filter((image) => image.target === activeTab);
    }
    setImages(newCollection);
  }, [activeTab]);

  return (
    <section id={id}>
      <div className="container">
        <nav>
          <button
            onClick={() => setActiveTab("all")}
            className={activeTab === "all" ? "active" : ""}
          >
            All
          </button>
          <button
            onClick={() => setActiveTab("design")}
            className={activeTab === "design" ? "active" : ""}
          >
            Design
          </button>
          <button
            onClick={() => setActiveTab("mobile")}
            className={activeTab === "mobile" ? "active" : ""}
          >
            Mobile
          </button>
          <button
            onClick={() => setActiveTab("front")}
            className={activeTab === "front" ? "active" : ""}
          >
            Front
          </button>
        </nav>

        <div className="album">
          {images.map((image) => (
            <div key={`image-${image.image}`} className="image-holder">
              <img src={image.image} alt="Image" />
              <div className="info">
                <a target="_blank" href={image.url ?? "#more"}>more</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
