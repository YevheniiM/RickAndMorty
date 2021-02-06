import { PropTypes } from "prop-types";
import "./Tag.scss";

const Tag = ({ children }) => {
  return (
    <div className={`Tag`}>
      <span>{children}</span>
    </div>
  );
};

Tag.propTypes = {
  className: PropTypes.string,
  children: PropTypes.array.isRequired,
};

export default Tag;
