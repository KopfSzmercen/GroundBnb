import { render } from "@testing-library/react";
import { rest } from "msw";
import * as React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import ColorModeProvider from "../theme/ColorMode";
import { LoginInput } from "../types/form-inputs/inputs";

export const handlers = [
  //eslint-disable-next-line
  rest.get("*/react-query", (req, res, ctx) => {
    //eslint-disable-next-line
    return res(
      //eslint-disable-next-line
      ctx.status(200),
      //eslint-disable-next-line
      ctx.json({
        name: "mocked-react-query"
      })
    );
  }),

  rest.post("*/auth/signin", (req, res, ctx) => {
    const { email, password } = req.body as LoginInput;

    if (email === "test@t.pl" && password == "password") {
      const data = {
        message: [
          { field: "email", message: "Email err from the server" },
          { field: "password", message: "Password err from the server" }
        ]
      };
      return res(ctx.status(401), ctx.json(data));
    }

    return res(ctx.json({}));
  }),

  rest.post("*/auth/register", (req, res, ctx) => {
    const { email, password } = req.body as LoginInput;

    if (email === "test@t.pl" && password == "password") {
      const data = {
        message: [
          { field: "email", message: "Email err from the server" },
          { field: "password", message: "Password err from the server" },
          { field: "firstName", message: "First name err form the server" },
          { field: "lastName", message: "Last name err form the server" }
        ]
      };
      return res(ctx.status(401), ctx.json(data));
    }

    return res(ctx.json({}));
  }),

  rest.get("*/auth/getMe", (req, res) => {
    return res();
  })
];

const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false
      }
    }
  });

export function renderWithClient(ui: React.ReactElement) {
  const testQueryClient = createTestQueryClient();
  const { rerender, ...result } = render(
    <QueryClientProvider client={testQueryClient}>
      <ColorModeProvider>{ui}</ColorModeProvider>
    </QueryClientProvider>
  );
  return {
    ...result,
    rerender: (rerenderUi: React.ReactElement) =>
      rerender(
        <QueryClientProvider client={testQueryClient}>
          <ColorModeProvider>{rerenderUi}</ColorModeProvider>
        </QueryClientProvider>
      )
  };
}

export function createWrapper() {
  const testQueryClient = createTestQueryClient();
  return ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={testQueryClient}>
      {children}
    </QueryClientProvider>
  );
}
