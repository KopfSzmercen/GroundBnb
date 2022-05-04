import { fireEvent, render, screen } from "@testing-library/react";
import Navbar from "./Navbar";

describe("Render navbar with its buttons", () => {
  beforeEach(() => render(<Navbar />));

  it("Has home link and options button", () => {
    expect(screen.getByTestId("home-link")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "user-options" })
    ).toBeInTheDocument();
  });

  it("Opens the popover", () => {
    fireEvent.click(screen.getByRole("button", { name: "user-options" }));
    expect(screen.getByTestId("popover")).toBeInTheDocument();
  });
});
