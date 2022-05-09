declare namespace Express {
  export interface Request extends Express.Request {
    session: {
      userId: number;
      destroy: (...any) => any;
    };
  }

  export interface Response extends Express.Response {
    clearCookie: (...any) => any;
  }
}
