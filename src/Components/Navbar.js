
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faProjectDiagram, faGraduationCap, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-200 text-indigo-700 fixed bottom-0  left-0 w-full h-16 lg:h-screen lg:w-16 lg:top-0 lg:left-4 flex lg:flex-col items-center justify-center">
      <ul className="flex w-full justify-around lg:flex-col lg:gap-4 lg:w-auto lg:items-center">
        <li className="   rounded-full p-4 shadow-lg shadow-black">
          <Link to="/">
            <FontAwesomeIcon icon={faHome} size="lg" />
          </Link>
        </li>
        <li className="  rounded-full p-4 shadow-lg shadow-black">
          <Link to="/about">
            <FontAwesomeIcon icon={faUser} size="lg" />
          </Link>
        </li>
        <li className="   rounded-full p-4 shadow-lg shadow-black">
          <Link to="/projects">
            <FontAwesomeIcon icon={faProjectDiagram} size="lg" />
          </Link>
        </li>
        <li className="   rounded-full p-4 shadow-lg shadow-black">
          <Link to="/education">
            <FontAwesomeIcon icon={faGraduationCap} size="lg" />
          </Link>
        </li>
        <li className="   rounded-full p-4 shadow-lg shadow-black">
          <Link to="/contact">
            <FontAwesomeIcon icon={faEnvelope} size="lg" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
