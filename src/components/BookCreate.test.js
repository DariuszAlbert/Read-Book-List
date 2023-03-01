import { screen, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import user from "@testing-library/user-event";
import userEvent from "@testing-library/user-event";
import BookCreate from "./BookCreate";
import { handleChange } from "./BookCreate";

test("Component shows Label, Input and Button", () => {
  render(<BookCreate />);

  const heading = screen.getByText("Add a Book");
  const label = screen.getByText("Title");
  const input = screen.getByRole("textbox");
  const button = screen.getByRole("button");

  //if elements exists

  expect(heading).toBeInTheDocument();
  expect(label).toBeInTheDocument();
  expect(input).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});

test("it calls bookCreate when the form is submited ", async () => {
  const mock = jest.fn();

  render(<BookCreate createBook={mock} />);

  const input = screen.getByRole("textbox");
  const button = screen.getByRole("button");

  await waitFor(() => userEvent.type(input, "Czarny Łabędź"));
  await waitFor(() => userEvent.click(button));

  expect(mock).toBeCalled();
  expect(mock).toBeCalledWith("Czarny Łabędź");
});

test("if clear input after form is submitted", async () => {
  const mock = jest.fn();

  render(<BookCreate createBook={mock} />);

  const input = screen.getByRole("textbox");
  const button = screen.getByRole("button");

  await waitFor(() => userEvent.type(input, "Czarny Łabędź"));
  await waitFor(() => userEvent.click(button));

  // if clears input after form is subitted

  expect(input).toHaveValue("");
});
