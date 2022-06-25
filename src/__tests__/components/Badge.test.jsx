import { getByText, render, screen } from "@testing-library/react";
import Badge from "../../components/Badge";

test("it should be Render by Label Value", () => {
  const badgeLabel = "Badge Label";
  render(<Badge label={badgeLabel} />);
  const badgeElement = screen.getByText(badgeLabel);
  expect(badgeElement).toBeInTheDocument();
});

test("it should be Render userName Constant", () => {
  render(<Badge />);
  const badgeElement = screen.getByText("USERNAME");
  expect(badgeElement).toBeInTheDocument();
});
