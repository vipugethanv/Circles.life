import React from "react";
import { getByRole, getByTestId, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Newsignup from "../Newsignup.js";
import '@testing-library/jest-dom'

const todos = [
];

app.get("/todos", (req, res) => {
 return res.status(200).json({
  data: todos,
  error: null,
 });
});