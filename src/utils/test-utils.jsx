import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "./appStore";

export function renderWithProviders(
  ui,
  {
    preloadedState = {},
    store = appStore,
    route = '/',
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return (
      <Provider store={store}>
        <BrowserRouter>
          {children}
        </BrowserRouter>
      </Provider>
    );
  }

  // Set the window history state to the requested route
  window.history.pushState({}, 'Test page', route);

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
