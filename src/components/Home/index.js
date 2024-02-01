import LogoTitle from "../../assets/images/E.png";
import { Link } from "react-router-dom";
import "./index.scss";
import { useState } from "react";
import AnimatedLetters from "../AnimatedLetters";

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArray = ["r", "i", "o", "n"];
  const jobArray = [
    "s",
    "o",
    "f",
    "t",
    "w",
    "a",
    "r",
    "e",
    "",
    "d",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
  ];
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Hi, <br /> I'm <img src={LogoTitle} alt="developer" />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br />
          Software Developer
        </h1>
        <h2>Software Developer / Student</h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
    </div>
  );
};

export default Home;
