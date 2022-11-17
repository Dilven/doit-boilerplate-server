import * as http from "http";

export class HTTPError extends Error {
  constructor(
    public HTTPcode: number,
    public publicMessage: string | undefined = http.STATUS_CODES[HTTPcode],
    message = publicMessage
  ) {
    super(message);
    Error.captureStackTrace(this, HTTPError);
  }
}
