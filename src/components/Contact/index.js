import { useEffect, useRef, useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import Loader from "react-loaders";
import emailjs from "@emailjs/browser";

const Contact = () => {
  document.title = "Contact Me";
  const [letterClass, setLetterClass] = useState("text-animate");
  const refForm = useRef();
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);

    // Cleanup the timeout to avoid memory leaks
    return () => clearTimeout(timeoutId);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_m60klep",
        "template_b94bd3u",
        refForm.current,
        "iUKVe1zC0aUWBsxcN"
      )
      .then(
        () => {
          alert("Message successfully sent");
        },
        () => {
          alert("Failed to send the message, please try again");
        }
      );
  };

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["C", "o", "n", "t", "a", "c", "t", " ", "m", "e"]}
              idx={15}
            />
          </h1>
          <p>
            I am a versatile developer who is enthusiastic about contributing to
            both front-end and back-end projects. With a solid understanding of
            programming principles, I am equipped to create compelling user
            interfaces and robust server-side functionalities. My accessibility
            and approachability ensure smooth communication and effective
            collaboration with team members.
          </p>
          <p>
            I am committed to delivering high-quality solutions that meet
            project requirements and exceed expectations, leveraging my skills
            in both front-end and back-end development to drive success.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input
                    type="submit"
                    name="button"
                    className="flat-button"
                    value="SEND"
                  />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <Loader type="ball-pulse-sync" />
    </>
  );
};

export default Contact;
