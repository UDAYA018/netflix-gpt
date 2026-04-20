import userReducer, { addUser, removeUser } from "../userSlice";

describe("userSlice", () => {
  const initialState = null;

  it("should return the initial state", () => {
    expect(userReducer(undefined, { type: "unknown" })).toEqual(initialState);
  });

  it("should handle addUser", () => {
    const dummyUser = { uid: "123", email: "test@example.com" };
    const actual = userReducer(initialState, addUser(dummyUser));
    expect(actual).toEqual(dummyUser);
  });

  it("should handle removeUser", () => {
    const loggedInState = { uid: "123", email: "test@example.com" };
    const actual = userReducer(loggedInState, removeUser());
    expect(actual).toEqual(null);
  });
});
