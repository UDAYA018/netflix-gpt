import React from "react";
import { useSelector } from "react-redux";
import MoiveList from "./MovieList";

const GptMovieSuggestions = () => {
  const { movieName, movieResults } = useSelector((store) => store.gpt);
  if (!movieName) return null;

  return (
    <div className="p-4 m-4 bg-black bg-opacity-80 text-white rounded-lg">
      <div>
        {movieName.map((movieName, index) => (
          <MoiveList
            key={movieName}
            title={movieName}
            movies={movieResults[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
