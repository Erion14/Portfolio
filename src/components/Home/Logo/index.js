import "./index.scss";
import LogoS from "../../../assets/images/E.png";
import { useRef } from "react";

const Logo = () => {
  const solidLogoRef = useRef();
  const bgRef = useRef();

  return (
    <div className="logo-container" ref={bgRef}>
      <img ref={solidLogoRef} className="solid-logo" src={LogoS} alt="E" />
    </div>
  );
};

export default Logo;
