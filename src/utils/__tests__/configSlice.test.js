import configReducer, { changeLanguage } from "../configSlice";

describe("configSlice", () => {
  const initialState = {
    lang: "en",
  };

  it("should return the initial state", () => {
    expect(configReducer(undefined, { type: "unknown" })).toEqual(initialState);
  });

  it("should handle changeLanguage", () => {
    const actual = configReducer(initialState, changeLanguage("es"));
    expect(actual.lang).toEqual("es");
  });
});
