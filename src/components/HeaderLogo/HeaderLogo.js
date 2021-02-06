import "./HeaderLogo.scss";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";

const HeaderLogo = () => {
  return (
    <h1 className="HeaderLogo">
      <span>surf the</span>
      <Logo className="HeaderLogo__logo" />
      <span>universe</span>
    </h1>
  );
};

export default HeaderLogo;
