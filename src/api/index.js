import { SERVER_URL } from "../common/constants";

export const getCharacters = async (params) => {
  const searchParams = new URLSearchParams(params);
  return (
    await fetch(`${SERVER_URL}/character?${searchParams.toString()}`, {
      mode: "no-cors",
    })
  ).json();
};
export const getCharacter = async (id) => {
  // TODO: .toString() is not needed here
  // id is a number, putting it into template literal will result in string
  return (
    await fetch(`${SERVER_URL}/character/${id.toString()}`, {
      mode: "no-cors",
    })
  ).json();
};

export const getEpisode = async (id) => {
  return (
    await fetch(`${SERVER_URL}/episode/${id.toString()}`, {
      mode: "no-cors",
    })
  ).json();
};
