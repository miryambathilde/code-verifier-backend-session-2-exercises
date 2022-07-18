/**
 * Basic JSON response for Controller
 */

export type BasicResponse = {
  message: string;
};

export type GoodbyeResponse = {
  message: string;
  date: string;
};

/**
 * Error JSON response for Controller
 */

export type ErrorResponse = {
  error: string;
  message: string;
};
