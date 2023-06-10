import React from "react";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div className="info">
          <h2>I Have high skills in developing and programming</h2>
          <p>
          I’m a future frontend developer. Currently based in Norway and I have learned HTML, CSS, 
          Javascript, React and css Frameworks, Databases & Cloud Hosting and Wordpress.
          </p>
        </div>

        <div className="rates">
          <div id="front-development">
            <p>Frontend Development <span>90%</span></p>
            <div className="rate" >
                <span style={{ 
                    width: "90%"
                 }}></span>
            </div>
          </div>
          <div id="mobile-development">
            <p>Mobile Developing <span>60%</span></p>
            <div className="rate">
                <span style={{ 
                    width: "60%"
                 }}></span>
            </div>
          </div>
          <div id="design">
            <p>UI/UX design <span>80%</span></p>
            <div className="rate">
                <span style={{ 
                    width: "80%"
                 }}></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
