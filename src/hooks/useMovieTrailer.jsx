import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideos } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const trailerVideos = useSelector((store) => store.movies?.trailerVideos);
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
    !trailerVideos && getMovieVideos();
  }, []);
};

export default useMovieTrailer;
