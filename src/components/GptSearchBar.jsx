import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  //search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS,
    );
    const json = await data.json();
    console.log("TMDB Search Results:", json.results);
    return json.results;
  };

  const handleGptSearchClick = async () => {
    console.log("Search text:", searchText.current.value);
    // make API call to GPT API and get movie results
    // const gptQuery =
    //   "Act as a movie recommendation engine. Suggest movies based on the following input: " +
    //   searchText.current.value +
    //   ". only give me names of 5 movies, comma separated like the example result given ahead. Example result: Movie1, Movie2, Movie3, Movie4, Movie5";

    // const gptResults = await openai.responses.create({
    //   model: "gpt-3.5-turbo",
    //   instructions: "You are a coding assistant that talks like a pirate",
    //   input: gptQuery,
    // });
    // if (!gptResults.output_text) {
    //   //Todo: write error hanlding
    // }
    // console.log("GPT Results:", gptResults.output_text);
    // //suppose the output is "Movie1, Movie2, Movie3, Movie4, Movie5", we need to split it into an array of movie names
    // let movieNames = gptResults.output_text;
    let movieNames =
      "Happy Raj, Aranmanai, Jana nayagan, Tourist Family, Friendly Couple";
    movieNames = movieNames.split(",").map((name) => name.trim());
    console.log("Movie Names:", movieNames);

    const promiseArray = movieNames.map((movie) => searchMovieTMDB(movie));
    //[Promise, Promise, Promise, Promise, Promise]

    //Promise.all will wait for all the promises to resolve and return an array of results in the same order. It will wait for all the promises to resolve or if any promise rejects, it will reject with that reason.
    const tmdbResults = await Promise.all(promiseArray);
    console.log("TMDB Results:", tmdbResults);
    dispatch(
      addGptMovieResult({ movieName: movieNames, movieResults: tmdbResults }),
    );
    searchText.current.value = "";
  };
  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="col-span-9 p-4 m-4"
          placeholder={lang[langKey]?.gptSearchPlaceholder}
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langKey]?.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
