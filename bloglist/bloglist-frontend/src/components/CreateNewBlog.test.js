import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CreateNewBlog from "./CreateNewBlog";

test("Create new blog form calls event handler with correct props", async () => {
  const createNewBlogEntry = jest.fn();
  const user = userEvent.setup();
  render(<CreateNewBlog createNewBlogEntry={createNewBlogEntry} />);

  const button = screen.getByText("Create");
  const inputs = screen.getAllByRole("textbox");
  await user.type(inputs[0], "A title");
  await user.type(inputs[1], "An author");
  await user.type(inputs[2], "A URL");

  await user.click(button);
  expect(createNewBlogEntry.mock.calls).toHaveLength(1);
  expect(createNewBlogEntry.mock.calls[0][0].title).toBe("A title");
  expect(createNewBlogEntry.mock.calls[0][0].author).toBe("An author");
  expect(createNewBlogEntry.mock.calls[0][0].url).toBe("A URL");
});
