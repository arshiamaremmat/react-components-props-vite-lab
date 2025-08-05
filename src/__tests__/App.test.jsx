import { render, screen } from "@testing-library/react";
import App from "../components/App";

test("renders blog name from props", () => {
  render(<App />);
  expect(screen.getByText(/My Personal Blog/i)).toBeInTheDocument();
});

test("renders at least one article", () => {
  render(<App />);
  expect(screen.getByText(/React Props Explained/i)).toBeInTheDocument();
});