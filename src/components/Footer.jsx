import React from "react";
import {LuFacebook, LuInstagram, LuLinkedin} from 'react-icons/lu'
export default function Footer() {
  return (
    <section id="footer">
      <div className="container">
        <h1>Sherzad.</h1>
        <div id="socials">
          <a href="#facebook">
            <LuFacebook/>
          </a>
          <a href="#instagram">
            <LuInstagram />
          </a>
          <a href="#linkedin">
            <LuLinkedin />
          </a>
        </div>
        <p>&copy; Sherzad Hasan</p>
      </div>
    </section>
  );
}
