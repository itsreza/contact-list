import { render, screen } from "@testing-library/react";
import ContactApp from "../components/ContactApp";

test("it should be render Contact List App", () => {
  render(<ContactApp />);
  const linkElement = screen.getByTestId("contactApp");
  expect(linkElement).toBeInTheDocument();
});
