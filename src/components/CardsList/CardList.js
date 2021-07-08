import "./CardList.scss";
import Card from "../Card/Card";

const CardList = ({ characters }) => {
  const renderCharacter = (character) => <Card className="Card" key={character.id} {...character} />;
  return <div className="CardList">{characters?.map(renderCharacter)}</div>;
};

// TODO: prop types

export default CardList;
