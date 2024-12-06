import {
  QueryClient,
  QueryCache,
  MutationCache,
  QueryClientConfig,
} from '@tanstack/react-query';

function errorHandler(errorMsg: string) {
  const id = 'react-query-error';

  // error handler
}

export const queryClientOptions: QueryClientConfig = {
  defaultOptions: {
    queries: {
      staleTime: 600000,
      gcTime: 900000,
      refetchOnWindowFocus: false,
    },
  },
  queryCache: new QueryCache({
    onError: (error) => errorHandler(error.message), // 쿼리캐시를 통해 오류를 발생하는 모든 쿼리에 대해 전역 errorHandler를 사용하도록 셋팅
  }),
  mutationCache: new MutationCache({
    onError: (error) => {},
  }),
};

export const queryClient = new QueryClient(queryClientOptions);
