import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import BookEdit from "./BookEdit";

test("if component showing appropriate components while called", () => {
  const books = {
    id: 1,
    title: "Harry Potter",
  };

  render(<BookEdit book={books} />);

  const newTitle = screen.getByText(/new title/i);
  const input = screen.getByRole("textbox");
  const saveButton = screen.getByRole("button", { name: "Save" });

  expect(newTitle).toBeInTheDocument();
  expect(input).toBeInTheDocument();
  expect(saveButton).toBeInTheDocument();
});
