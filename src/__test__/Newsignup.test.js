import React from 'react';
import { getByRole, render, screen } from '@testing-library/react';
import Newsignup from '../Newsignup.js';

test('renders the landing page', () => {
  render(<Newsignup/>);

  expect(screen.getByRole("heading")).toHaveTextContent(/Login to pick a Challenge/);
  expect(screen,getByRole("textbox")).toHaveTextContent();
  //expect(screen.getByRole("combobox")).toHaveDisplayValue("Select a breed");
  expect(screen.getByRole("button", { name: "Login" })).toBeDisabled();
  
});