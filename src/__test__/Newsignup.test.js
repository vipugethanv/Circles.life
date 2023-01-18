import React from "react";
import {
  getByRole,
  getByTestId,
  render,
  screen,
  fireEvent,
} from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Newsignup from "../Newsignup.js";
import "@testing-library/jest-dom";
import * as router from 'react-router'

const navigate = jest.fn()
beforeEach(() => {
  jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate)
})
//Render Landing Page
test("renders the landing page", () => {
  const { getByTestId, container, debug } = render(<Newsignup />, {
    wrapper: MemoryRouter,
  });

  const btn = getByTestId("submit_button");

  expect(screen.getByRole("heading").textContent).toBe(
    "Login to pick a Challenge"
  );
  expect(btn).not.toBe(null);
});

//Disabled Button Test
it("should render a disabled button", () => {
  const { getByTestId } = render(<Newsignup />, { wrapper: MemoryRouter });

  const btn = getByTestId("submit_button");
  expect(btn).toHaveAttribute("disabled");
  expect(btn).toBeDisabled();
});

const login = async (usermail, userpassword) => {
  const body = { usermail: usermail, userpassword: userpassword };

  const response = await fetch("http://localhost:3000/user-service/login", {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(body),
  });
  const data = await response.json();
  return data;
};

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        message: "login success",
        email: "admin@hello.world",
        password: "circles@111",
      }),
  })
);

it("validate username", async () => {
  const usermail = await login("admin@hello.world");
  const userpassword = await login("circles@111");
  expect(usermail.email).toEqual("admin@hello.world");
  expect(userpassword.password).toEqual;
  // expect(received).toHaveBeenCalled(1);
});

it("Should call API when click login Button", () => {
  const { getByTestId } = render(<Newsignup />, { wrapper: MemoryRouter });

  const emailField = getByTestId("emailfield");
  const passwordField = getByTestId("passwordfield");
  const loginButton = getByTestId("submit_button");

  fireEvent.change(emailField, { target: { value: "admin@hello.world" } });
  fireEvent.change(passwordField, { target: { value: "circles@111" } });

  fireEvent.click(loginButton);
  //fireEvent.click(getByTestId("submit_button"))
  global.fetch.mockImplementation(() => {
    return Promise.resolve({
      json: () => {
        return Promise.resolve("Successfull");
      },
    });
  });
  expect(global.fetch).toBeCalled();
});


test('Checking if 200 status code redirecting to Dashboard Page', async () => {

  const setTokenMock = jest.fn()
  const { getByTestId } = render(<Newsignup />, { wrapper: MemoryRouter });
  const emailField = getByTestId("emailfield");
  const passwordField = getByTestId("passwordfield");

  fireEvent.change(emailField, { target: { value: 'admin@hello.world' } })
  fireEvent.change(passwordField, { target: { value: 'circles@111' } })

  global.fetch.mockImplementation(() => {
      return Promise.resolve({
          json: () => {
              return Promise.resolve({message:"login Successful",email:"admin@hello.world" ,password:"circles@111"})
          }, 
          status:200
      })
  })

  const response=fetch()

  fireEvent.click(screen.getByTestId('submit_button'))
  await sleepFor(1000)
  expect(navigate).toHaveBeenCalledWith('/Dashboard', {"state": {"email": "admin@hello.world"}})
 
})
async function sleepFor (timeInMS){
  return new Promise((resolve) => {
      setTimeout(resolve,timeInMS)
  })
}



//new test
test('Checking if 400 status code redirecting to Dashboard Page', async () => {

  const setTokenMock = jest.fn()
  const { getByTestId } = render(<Newsignup />, { wrapper: MemoryRouter });
  const emailField = getByTestId("emailfield");
  const passwordField = getByTestId("passwordfield");

  fireEvent.change(emailField, { target: { value: 'admin@hello.world' } })
  fireEvent.change(passwordField, { target: { value: 'circles@111' } })

  global.fetch.mockImplementation(() => {
      return Promise.resolve({
          json: () => {
              return Promise.resolve({message:"login failed",email:"" ,password:""})
          }, 
          status:400
      })
  })

  const response=fetch()
  window.alert = jest.fn()
  const alertSpy = jest.spyOn(global,"alert")

  fireEvent.click(screen.getByTestId('submit_button'))
  await sleepFor(1000)
  expect(alertSpy).toHaveBeenCalledWith("login Failed")
 
})
