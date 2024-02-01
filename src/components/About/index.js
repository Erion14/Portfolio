import "./index.scss";
import AnimatedLetters from "../AnimatedLetters";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  });

  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={["A", "b", "o", "u", "t", " ", "m", "e"]}
            idx={15}
          />
        </h1>
        <p>
          As a second-year student at RIT Kosovo, I'm an ambitious programmer
          passionate about computer science. I thrive on challenges, constantly
          learning and exploring new coding languages and technologies.
        </p>
        <p>
          Beyond personal achievement, I aim to contribute meaningfully to the
          tech industry through innovative projects and research. With
          determination and a hunger for excellence, I'm on track to become a
          skilled and influential programmer.
        </p>
      </div>
      <div className="stage-cube-cont">
        <div className="cubespinner">
          <div className="face1">
            <FontAwesomeIcon icon="fa-brands fa-java" color="black" />
          </div>
          <div className="face2">
            <FontAwesomeIcon icon="fa-brands fa-css3" color="#DD0031" />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon="fa-brands fa-html5" color="#DD0031" />
          </div>
          <div className="fac4">
            <FontAwesomeIcon icon="fa-brands fa-git" color="#DD0031" />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon="fa-brands fa-react" color="#DD0031" />
          </div>
          <div className="face6">
            <FontAwesomeIcon icon="fa-brands fa-python" color="#DD0031" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
