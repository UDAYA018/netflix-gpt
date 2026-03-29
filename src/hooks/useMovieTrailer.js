import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailerVideos } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  // Fetch trailer video && updating the store with the trailer video data
  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      API_OPTIONS,
    );
    const json = await data.json();

    const filteredData = json.results.filter(
      (video) => video.type === "Trailer",
    );
    const trailer = filteredData.length ? filteredData[0] : json.results[0];
    dispatch(addTrailerVideos(trailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;
