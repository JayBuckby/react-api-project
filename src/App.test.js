import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App tests", () => {
  it("should render in subtext on the page", () => {
    render(<App />);
    const pageContents = screen.getByTestId("title");

    expect(pageContents).toBeInTheDocument();
  });
});
