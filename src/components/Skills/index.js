import React, { useState, useEffect } from "react";
import "./index.scss";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import { HoverEffect } from "../ui/card-hover-effect";
import { motion } from "framer-motion";

const Skills = () => {
  document.title = "My Skills";

  const [letterClass, setLetterClass] = useState("text-animate");
  const [showProjects, setShowProjects] = useState(false);

  const projects = [
    {
      title: "Multithreading",
      description:
        "The ability to execute multiple threads concurrently, enabling efficient utilization of processing resources.",
      link: "https://github.com/Erion14/Java/tree/master/Java/src/multithreading",
    },
    {
      title: "Input Output Streams",
      description:
        "Mechanisms for handling data flow between a program and external sources (e.g., files, network).",
    },
    {
      title: "Stream API",
      description:
        "A set of operations for processing data streams efficiently and declaratively.",
    },
    {
      title: "Functional Programming",
      description:
        "A programming paradigm emphasizing pure functions and immutable data structures for concise and predictable code.",
    },
    {
      title: "Object-Oriented Programming",
      description:
        "A programming paradigm organizing software around objects that encapsulate data and behavior.",
    },
    {
      title: "Java Collections Framework",
      description:
        "A programming paradigm organizing software around objects that encapsulate data and behavior.",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowProjects(true);
    }, 2600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={"My Skills".split("")}
            idx={15}
          />
        </h1>
        <div className="max-w-5xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: showProjects ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            {showProjects && <HoverEffect items={projects} />}
          </motion.div>
        </div>
      </div>
      <Loader type="ball-pulse-sync" />
    </>
  );
};

export default Skills;
