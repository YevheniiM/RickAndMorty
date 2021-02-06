import "./GeneralHeader.scss";
import Search from "../Search";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import { Link } from "react-router-dom";

const GeneralHeader = () => {
  return (
    <div className="GeneralHeader">
      <Link exact to={`/home/`} className="GeneralHeader__logo">
        <Logo className="GeneralHeader__logo" />
      </Link>

      <Search className="GeneralHeader__headerSearch" />
    </div>
  );
};

export default GeneralHeader;
