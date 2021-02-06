import "./Search.scss";
import { ReactComponent as Logo } from "../../assets/icons/search.svg";

const Search = (props) => {
  const handleChange = (event) => {
    props.setValue(event.target.value);
  };

  return (
    <div className={`Search ${props.className}`}>
      <Logo className="Search__logo" />
      <input className="Search__input" placeholder="Search by name" value={props.value} onChange={handleChange} />
      <button className="Search__button">Find Character</button>
    </div>
  );
};

export default Search;
