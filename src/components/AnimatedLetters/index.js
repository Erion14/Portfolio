import "./index.scss";

const AnimatedLetters = ({ letterClass, strArray, idx }) => {
  return (
    <span>
      {strArray.map((char, i) => (
        <span key={char + i} className="{`${letterClass} ${i + idx}`}">
          {char}
        </span>
      ))}
    </span>
  );
};

export default AnimatedLetters;
