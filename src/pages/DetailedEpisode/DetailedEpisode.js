import "./DetailedEpisode.scss";
import { Link, NavLink, useParams } from "react-router-dom";
import { getEpisode } from "../../api";
import { useEffect, useState } from "react";
import TextLabel from "../../components/TextLabel";

const DetailedEpisode = () => {
  const { id } = useParams();

  const [episode, setEpisode] = useState("");

  useEffect(() => {
    loadEpisode(id);
  }, [id]);

  const loadEpisode = async (id) => {
    const item = await getEpisode(id);
    if (item.error) {
      console.log(item.error);
    } else {
      setEpisode(item);
    }
  };

  const renderCharacters = (characterReference) => {
    return (
      <Link
        className="DetailedEpisode__character_link"
        key={characterReference.split("/").pop()}
        exact
        to={`/character/${characterReference.split("/").pop()}`}
      >
        <TextLabel text={characterReference} />
      </Link>
    );
  };

  return (
    <div className="DetailedEpisode">
      <div className="DetailedEpisode__image">
        <h2 className="DetailedEpisode__imageText">#{episode.episode}</h2>
      </div>

      <div className="DetailedEpisode__description">
        <h1 className="DetailedEpisode__name">{episode.name}</h1>
        <div className="DetailedEpisode__characters">
          <TextLabel text="Characters:" />
          {episode.characters?.map(renderCharacters)}
        </div>
      </div>
    </div>
  );
};

export default DetailedEpisode;
