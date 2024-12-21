import { useState, useCallback } from 'react';
import { AsyncResult } from '../types/utils';
import { handleApiError } from '../utils/error-handling';

type AsyncFunction<T> = (...args: any[]) => Promise<T>;

export const useAsync = <T>(asyncFunction: AsyncFunction<T>): AsyncResult<T> & {
  execute: (...args: any[]) => Promise<void>;
} => {
  const [state, setState] = useState<AsyncResult<T>>({
    data: null,
    loading: false,
    error: null,
  });

  const execute = useCallback(
    async (...args: any[]): Promise<void> => {
      setState({ data: null, loading: true, error: null });
      try {
        const result = await asyncFunction(...args);
        setState({ data: result, loading: false, error: null });
      } catch (error) {
        const handledError = handleApiError(error);
        setState({ data: null, loading: false, error: handledError });
      }
    },
    [asyncFunction]
  );

  return { ...state, execute };
};