import gptReducer, {
  toggleGptSearchView,
  addGptMovieResult,
} from "../gptSlice";

describe("gptSlice", () => {
  const initialState = {
    showGptSearch: false,
    movieName: null,
    movieResults: null,
  };

  it("should return the initial state", () => {
    expect(gptReducer(undefined, { type: "unknown" })).toEqual(initialState);
  });

  it("should handle toggleGptSearchView", () => {
    const actual1 = gptReducer(initialState, toggleGptSearchView());
    expect(actual1.showGptSearch).toEqual(true);

    const actual2 = gptReducer(actual1, toggleGptSearchView());
    expect(actual2.showGptSearch).toEqual(false);
  });

  it("should handle addGptMovieResult", () => {
    const payload = {
      movieName: ["Movie 1", "Movie 2"],
      movieResults: [[{ id: 1 }], [{ id: 2 }]],
    };
    const actual = gptReducer(initialState, addGptMovieResult(payload));
    expect(actual.movieName).toEqual(payload.movieName);
    expect(actual.movieResults).toEqual(payload.movieResults);
  });
});
