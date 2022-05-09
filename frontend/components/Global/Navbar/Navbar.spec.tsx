import { screen, waitFor } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import { rest } from "msw";
import { RouterContext } from "next/dist/shared/lib/router-context";
import { server } from "../../../jest.setup";
import { createMockRouter } from "../../../test_utils/mockRouter";
import { renderWithClient } from "../../../test_utils/utils";
import Navbar from "./Navbar";

// const getLogInBtn = () => screen.getByText(/log in/i);
// const getRegisterBtn = () => screen.getByText(/register/i);
const getOpenMenuBtn = () =>
  screen.getByRole("button", { name: "user-options" });

describe("Render navbar with its buttons", () => {
  it("Has home link and options button", async () => {
    renderWithClient(
      <RouterContext.Provider value={createMockRouter({})}>
        <Navbar />
      </RouterContext.Provider>
    );

    await waitFor(() => {
      expect(screen.getByTestId("home-link")).toBeInTheDocument();
      expect(
        screen.getByRole("button", { name: "user-options" })
      ).toBeInTheDocument();
    });
  });

  it("Opens the popover when user is not logged in", async () => {
    renderWithClient(
      <RouterContext.Provider value={createMockRouter({})}>
        <Navbar />
      </RouterContext.Provider>
    );

    await userEvent.click(getOpenMenuBtn());

    await waitFor(() => {
      expect(screen.getByText(/log in/i)).toBeInTheDocument();
      expect(screen.getByText(/register/i)).toBeInTheDocument();
      expect(screen.getByText(/help/i)).toBeInTheDocument();
    });
  });

  it("Opens the popover when the user is logged in", async () => {
    server.use(
      // Runtime request handler override for the "GET /book/:bookId".
      rest.get("*/auth/getMe", (req, res, ctx) => {
        return res(ctx.json({ id: 2 }));
      })
    );

    renderWithClient(
      <RouterContext.Provider value={createMockRouter({})}>
        <Navbar />
      </RouterContext.Provider>
    );

    await userEvent.click(getOpenMenuBtn());

    await waitFor(() => {
      expect(screen.getByText(/my offers/i)).toBeInTheDocument();
      expect(screen.getByText(/settings/i)).toBeInTheDocument();
      expect(screen.getByText(/log out/i)).toBeInTheDocument();
    });
  });
});
