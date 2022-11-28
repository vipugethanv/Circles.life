import React from "react";
import { getByRole, getByTestId, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Newsignup from "../Newsignup.js";
//import '@testing-library/jest-dom/extend-expect';

test("renders the landing page", () => {
  const { getByTestId } = render(<Newsignup />, { wrapper: MemoryRouter });

  const btn = getByTestId("submit_button");

  expect(screen.getByRole("heading").textContent).toBe(
    "Login to pick a Challenge"
  );
  expect(btn).not.toBe(null);

  const express = require("express");
  const app = express();
  app.listen(3000, () => console.log("Listening at port 3000"));
});
