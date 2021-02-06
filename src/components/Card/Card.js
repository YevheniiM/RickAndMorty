import "./Card.scss";
import TextLabel from "../TextLabel";
import Tag from "../Tag/Tag";
import { Gender, Status } from "../../common/constants";
import { Link } from "react-router-dom";

const Card = ({
  id,
  name,
  status,
  species,
  type,
  gender,
  origin,
  location,
  image,
  episode,
  url,
  created,
  className,
}) => {
  return (
    <div className={"Card"}>
      <div className="Card__icon">
        <Link to={`/character/${id}`}>
          <img className="Card__image" src={image} alt="Character" />
        </Link>
      </div>

      <div className="Card__info">
        <Link to={`/character/${id}`}>
          <h1 className="Card__name">{name}</h1>
        </Link>
        <div className="Card__tags">
          <Tag>
            {Status[status]}
            {status}
          </Tag>
          <Tag>
            {Gender[gender]}
            {gender}
          </Tag>
        </div>
        <TextLabel label={"Last known location:"} text={location.name} />
        <TextLabel label={"First seen in:"} text={origin.name} />
      </div>
    </div>
  );
};

export default Card;
