import { screen, render, waitFor } from "@testing-library/react";
import user from "@testing-library/user-event";
import "@testing-library/jest-dom";
import BookShow from "./BookShow";
import userEvent from "@testing-library/user-event";

test("if component showing appropriate components while receiving book list ", () => {
  const books = {
    id: 1,
    title: "Harry Potter",
  };

  render(<BookShow book={books} />);

  const bookTitle = screen.getByRole("heading", { name: /harry potter/i });
  const editButton = screen.getByRole("button", { name: "Edit" });
  const deleteButton = screen.getByRole("button", { name: "" });

  expect(bookTitle).toBeInTheDocument();
  expect(editButton).toBeInTheDocument();
  expect(deleteButton).toBeInTheDocument();
});

test("if calling onDelete method", async () => {
  const onDelete = jest.fn();

  const books = {
    id: 1,
    title: "Harry Potter",
  };

  render(<BookShow book={books} onDelete={onDelete} />);

  const deleteButton = screen.getByRole("button", { name: "" });

  userEvent.click(deleteButton);

  await waitFor(() => {
    expect(onDelete).toBeCalled();
  });
});
