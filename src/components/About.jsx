import React from "react";
import Image from "../images/about.jpeg";

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="image-holder">
          <img src={Image} alt="Image" />
        </div>

        <div className="info-holder">
          <div>
            <button>About me</button>
          </div>
          <h2>Creative Software Developer and Problem Solver</h2>
          <p>
          I’m a future frontend developer. Currently based in Norway and I have learned  HTML, CSS, Javascript, React and css Frameworks, Databases & Cloud Hosting and Wordpress in the two years at Noroff-School of technology and digital media. I have a passion for creating beautiful, intuitive and highly functional websites. I am a fast learner and I am always looking for new challenges. I am a team player and I am always looking for ways to improve my skills. I am a very creative person and I love to create new things. I am a very positive person and I always try to see the positive side of things. I am a very social person and I love to meet new people. I am a very hardworking person and I always try to do my best. I am a very ambitious person and I always try to achieve my goals. I am a very organized person and I always try to plan my work. I am a very responsible person and I always try to take responsibility for my actions. I am a very honest person and I always try to be honest with people.
          </p>
          <a href="#download-cv">download cv</a>
        </div>
      </div>
    </section>
  );
}
