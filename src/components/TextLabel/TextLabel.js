import { PropTypes } from "prop-types";
import "./TextLabel.scss";

const TextLabel = ({ label, text }) => {
  return (
    <div className={`TextLabel`}>
      <p className="TextLabel__label">{label}</p>
      <p className="TextLabel__text">{text}</p>
    </div>
  );
};

TextLabel.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default TextLabel;
