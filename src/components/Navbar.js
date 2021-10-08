import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";
import "../app.scss";

function Navbar() {
  const [click, setClick] = useState(false);
  const targetToggle = useRef();
  const hideListCourses = useRef();

  const handleClick = () => {
    window.setTimeout(() => {
      setClick(!click);
    }, 400);
    document.body.classList.toggle("stopscrolling");
    hideListCourses.current.classList.toggle("hide");
    targetToggle.current.classList.add("animation-btn");
  };

  const menuMobile = () => {
    if (window.innerWidth < 992) {
      setClick(false);
      hideListCourses.current.classList.toggle("hide");
      document.body.classList.toggle("stopscrolling");
    }
  };

  const brandClick = () => {
    if (
      window.innerWidth < 992 &&
      hideListCourses.current.classList.contains("hide") &&
      document.body.classList.contains("stopscrolling")
    ) {
      setClick(false);
      hideListCourses.current.classList.remove("hide");
      document.body.classList.remove("stopscrolling");
    }
  };

  return (
    <nav className="navbar-container container">
      <div className="brand-logo" onClick={brandClick}>
        <Link to="/">
          <img className="img-logo" src="/images/logoroom.png" alt="content" />
        </Link>
      </div>
      <ul className="list-courses" ref={hideListCourses} onClick={menuMobile}>
        <li className="course">
          <Link to="/">الرئيسية</Link>
        </li>
        <li className="course">
          <Link to="/frontend">Frontend</Link>
        </li>
        <li className="course">
          <Link to="/graphic">Graphic Design</Link>
        </li>
        <li className="course">
          <Link to="/ccourse">C++</Link>
        </li>
        <li className="course">
          <Link to="/marketing">Digital Marketing</Link>
        </li>
      </ul>
      <div className="btn-toggle" onClick={handleClick}>
        <i
          className={click ? "fas fa-times" : "fas fa-bars "}
          ref={targetToggle}
        />
      </div>
    </nav>
  );
}

export default Navbar;
