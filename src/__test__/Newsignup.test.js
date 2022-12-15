import React from "react";
import { getByRole, getByTestId, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Newsignup from "../Newsignup.js";
import '@testing-library/jest-dom'

//import { internalIP } from "webpack-dev-server";
//import '@testing-library/jest-dom/extend-expect';

/*it("Api testing", async function () {
  const response = new Newsignup();
  var data = await response.api();

  expect(data.Newsignup[username]).toEqual("admin@hello.world");
});*/

//Landing Page Test
test("renders the landing page", () => {
  const { getByTestId, container , debug} = render(<Newsignup />, { wrapper: MemoryRouter });


  const btn = getByTestId("submit_button");

  expect(screen.getByRole("heading").textContent).toBe(
    "Login to pick a Challenge"
  );
  expect(btn).not.toBe(null);
});

//Disabled Button Test
it('should render a disabled button', () => {
  const { getByTestId} = render(<Newsignup />, { wrapper: MemoryRouter });
    

    const btn = getByTestId("submit_button");
    expect(btn).toHaveAttribute('disabled')
    expect(btn).toBeDisabled()
})