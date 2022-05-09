import { screen, waitFor } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import { RouterContext } from "next/dist/shared/lib/router-context";
import { createMockRouter } from "../../../test_utils/mockRouter";
import { renderWithClient } from "../../../test_utils/utils";
import RegisterForm from "../RegisterForm";

const getEmailInput = () =>
  screen.getByRole("textbox", {
    name: /email/i
  });

const getPasswordInput = () => screen.getByLabelText(/password/i);
const getSendBtn = () => screen.getByTestId("register-btn");
const getFirstNameInput = () =>
  screen.getByRole("textbox", {
    name: /first name/i
  });
const getLastNameInput = () =>
  screen.getByRole("textbox", {
    name: /last name/i
  });

describe("Register form", () => {
  it("Does not send with empty values", async () => {
    renderWithClient(
      <RouterContext.Provider value={createMockRouter({})}>
        <RegisterForm />
      </RouterContext.Provider>
    );

    await userEvent.click(getSendBtn());

    await waitFor(() => {
      expect(
        screen.getByText(/password has to be at least 5 characters long/i)
      ).toBeInTheDocument();
      expect(screen.getByText(/this field is required/i)).toBeInTheDocument();
      expect(
        screen.getAllByText(/this field has to be at least 5 characters long/i)
          .length
      ).toBe(2);
    });
  });

  it("Does not sent with invalid email and password", async () => {
    renderWithClient(
      <RouterContext.Provider value={createMockRouter({})}>
        <RegisterForm />
      </RouterContext.Provider>
    );

    const invalidPassword = "a";
    const invalidEmail = "b";

    await userEvent.type(getEmailInput(), invalidEmail);
    await userEvent.type(getPasswordInput(), invalidPassword);
    await userEvent.click(getSendBtn());

    expect(getPasswordInput()).toHaveValue(invalidPassword);
    expect(getEmailInput()).toHaveValue(invalidEmail);

    await waitFor(() => {
      expect(screen.getByText(/invalid email/i)).toBeInTheDocument();
      expect(
        screen.getByText(/password has to be at least 5 characters long/i)
      ).toBeInTheDocument();
    });
  });

  it("Sets errors returned form the server", async () => {
    renderWithClient(
      <RouterContext.Provider value={createMockRouter({})}>
        <RegisterForm />
      </RouterContext.Provider>
    );

    await userEvent.type(getEmailInput(), "test@t.pl");
    await userEvent.type(getPasswordInput(), "password");
    await userEvent.type(getFirstNameInput(), "firstName");
    await userEvent.type(getLastNameInput(), "lastName");
    await userEvent.click(getSendBtn());

    await waitFor(() => {
      expect(
        screen.getByText(/email err from the server/i)
      ).toBeInTheDocument();

      expect(screen.getByText(/password err from the server/i));
    });

    expect(screen.getByText(/first name err form the server/i));
    expect(screen.getByText(/last name err form the server/i));
  });

  it("Correctly handles succesfull response", async () => {
    const router = createMockRouter({});
    renderWithClient(
      <RouterContext.Provider value={router}>
        <RegisterForm />
      </RouterContext.Provider>
    );

    await userEvent.type(getEmailInput(), "validtest@t.pl");
    await userEvent.type(getPasswordInput(), "validpassword");
    await userEvent.type(getFirstNameInput(), "firstName");
    await userEvent.type(getLastNameInput(), "lastName");

    await userEvent.click(getSendBtn());

    await waitFor(() =>
      expect(screen.getByText(/Register successfull!/i)).toBeInTheDocument()
    );
  });
});
