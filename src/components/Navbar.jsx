import React, { useState } from "react";
import { BiAlignRight } from "react-icons/bi";
export default function Navbar() {
  const items = ["home", "about", "portfolio", "skills", "projects"];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div className="container">
        <a href="#" id="logo">
          SHERZAD.
        </a>
        <div id="menu" className={isOpen ? "open" : ""}>
          {items.map((item, index) => (
            <NavItem
              item={item}
              key={index}
              index={index}
              setActiveIndex={setActiveIndex}
              activeIndex={activeIndex}
            />
          ))}
          <a href="#contact" id="hire">
            Hire
          </a>
        </div>

        <BiAlignRight id="toggler" onClick={() => setIsOpen((old) => !old)} />
      </div>
    </nav>
  );
}

function NavItem({ item, index, setActiveIndex, activeIndex }) {
  return (
    <a
      href={`#${item}`}
      className={`${activeIndex === index ? "active" : ""}`}
      onClick={() => setActiveIndex(index)}
    >
      {item}
    </a>
  );
}
