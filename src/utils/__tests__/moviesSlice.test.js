import moviesReducer, {
  addNowPlayingMovies,
  addTopRatedMovies,
  addPopularMovies,
  addUpComingMovies,
  addTrailerVideos,
} from "../moviesSlice";

describe("moviesSlice", () => {
  const initialState = {
    nowPlayingMovies: null,
    topRatedMovies: null,
    popularMovies: null,
    upComingMovies: null,
    trailerVideos: null,
  };

  it("should return the initial state", () => {
    expect(moviesReducer(undefined, { type: "unknown" })).toEqual(initialState);
  });

  it("should handle addNowPlayingMovies", () => {
    const movies = [{ id: 1, title: "Movie 1" }];
    const actual = moviesReducer(initialState, addNowPlayingMovies(movies));
    expect(actual.nowPlayingMovies).toEqual(movies);
  });

  it("should handle addTopRatedMovies", () => {
    const movies = [{ id: 2, title: "Movie 2" }];
    const actual = moviesReducer(initialState, addTopRatedMovies(movies));
    expect(actual.topRatedMovies).toEqual(movies);
  });

  it("should handle addPopularMovies", () => {
    const movies = [{ id: 3, title: "Movie 3" }];
    const actual = moviesReducer(initialState, addPopularMovies(movies));
    expect(actual.popularMovies).toEqual(movies);
  });

  it("should handle addUpComingMovies", () => {
    const movies = [{ id: 4, title: "Movie 4" }];
    const actual = moviesReducer(initialState, addUpComingMovies(movies));
    expect(actual.upComingMovies).toEqual(movies);
  });

  it("should handle addTrailerVideos", () => {
    const trailers = [{ id: "vid1", key: "abc" }];
    const actual = moviesReducer(initialState, addTrailerVideos(trailers));
    expect(actual.trailerVideos).toEqual(trailers);
  });
});
