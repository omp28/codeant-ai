export type Nullable<T> = T | null;

export type AsyncResult<T> = {
  data: Nullable<T>;
  loading: boolean;
  error: Nullable<Error>;
};

export type ActionResult<T> = Promise<{
  success: boolean;
  data?: T;
  error?: Error;
}>;