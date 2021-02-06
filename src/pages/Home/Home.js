import Search from "../../components/Search";
import Select from "../../components/Select";
import { useState, useEffect } from "react";
import CardList from "../../components/CardsList";
import "./Home.scss";
import HeaderLogo from "../../components/HeaderLogo";
import { getCharacters } from "../../api";

const statusOptions = [
  { value: "", label: "All Statuses" },
  { value: "alive", label: "alive" },
  { value: "dead", label: "dead" },
];

const genderOptions = [
  { value: "", label: "All Genders" },
  { value: "female", label: "female" },
  { value: "male", label: "male" },
  { value: "unknown", label: "unknown" },
];

function Home() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");
  const [characters, setCharacters] = useState();

  const loadCharacters = async (params) => {
    const items = await getCharacters(params);
    if (items.error) {
      console.log("Error: ", items.error);
    } else {
      setCharacters(items?.results);
    }
  };

  useEffect(() => {
    loadCharacters({
      ...(name && { name }),
      ...(gender && { gender }),
      ...(status && { status }),
    });
  }, [name, gender, status]);

  const onNameChange = (value) => {
    setName(value);
  };

  return (
    <div className="Home">
      <HeaderLogo />
      <Search className="Home__heroSearch" setValue={onNameChange} value={name} />
      <div className="Home__filters">
        <Select label="Status" options={statusOptions} value={status} handleSelect={setStatus} />
        <Select label="Gender" options={genderOptions} value={gender} handleSelect={setGender} />
      </div>
      <div className="Home__cardListWrapper">
        <div className="Home__cardList">
          <CardList characters={characters} />
        </div>
      </div>
    </div>
  );
}

export default Home;
