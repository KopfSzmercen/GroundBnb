import { fireEvent, render, screen } from "@testing-library/react";
import FaqSection from "./FaqSection";

describe("It renders accordion and opens", () => {
  render(<FaqSection />);

  it("Should render faq section", () => {
    expect(screen.getByTestId("faq-section")).toBeInTheDocument();

    const elements = screen.getAllByTestId("open-acc");
    elements.forEach((e) => {
      expect(e).toBeInTheDocument();
      fireEvent.click(e);
    });

    expect(screen.getAllByTestId("text-acc").length).toBe(3);
  });
});
