import { useState, useCallback } from 'react';

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(
    async (requestConfig: any, applyData: any) => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await requestConfig;

        if (!response) {
          throw new Error('Request failed!');
        }

        applyData(response);
      } catch (err: any) {
        setError(err.message || 'Something went wrong!');
      }
      setIsLoading(false);
    },
    []
  );

  return { isLoading, error, sendRequest };
};

export default useHttp;
