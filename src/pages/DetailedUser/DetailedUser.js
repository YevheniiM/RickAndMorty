import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import "./DetailedUser.scss";
import { getCharacter } from "../../api";
import Tag from "../../components/Tag";
import TextLabel from "../../components/TextLabel";
import { Gender, Status } from "../../common/constants";

const DetailedUser = () => {
  const { id } = useParams();

  const [character, setCharacter] = useState();

  useEffect(() => {
    loadCharacter(id);
  }, [id]);

  const loadCharacter = async (id) => {
    const item = await getCharacter(id);
    if (item.error) {
      console.log(item.error);
    } else {
      setCharacter(item);
    }
  };

  const renderEpisodes = (episode_) => {
    const id = episode_.split("/").pop();
    return (
      <Link className="DetailedUser__episodeLink" key={id} exact to={`/episode/${id}`}>
        <TextLabel text={episode_} />
      </Link>
    );
  };

  const { name, status, gender, species, origin, created, image, episode, location } = character || {};

  const episodes = episode?.map(renderEpisodes);
  console.log(episodes); // TODO: remove if unneeded

  return character ? (
    <div className="DetailedUser">
      <div className="DetailedUser__wrapper">
        <div className="DetailedUser__imageWrapper">
          <img src={image} className="DetailedUser__image" alt="Detailed character" />
        </div>
        <div className="DetailedUser__descriptionWrapper">
          <h1 className="DetailedUser__head">
            #{id} {name}
          </h1>
          <div className="DetailedUser__tagsWrapper">
            <Tag>
              {Status[status]}
              {status}
            </Tag>
            <Tag>
              {Gender[gender]}
              {gender}
            </Tag>
          </div>
          <div className="DetailedUser__infoWrapper">
            <div className="DetailedUser__info">
              <TextLabel label="Species: " text={species} />
              <TextLabel label="Origin: " text={origin.name} />
              <TextLabel label="Birthday: " text={created} />
              <TextLabel label="Last known location: " text={location.name} />
              <TextLabel label="First seen in: " text={origin.name} />
            </div>
            <div className="DetailedUser__episodesWrapper">
              <p>Episodes:</p>
              {episodes}
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="DetailedUser__error">Error 404: Not Found</div>
  );
};

export default DetailedUser;
