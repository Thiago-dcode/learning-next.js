import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import PostIndexPage from "../../app/posts/page";
describe("posts index page", () => {
  it("should render properly", () => {
    render(<PostIndexPage />);
  });
});
