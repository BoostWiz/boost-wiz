import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render as RtlRender } from '@testing-library/react';
import { ReactElement } from 'react';
import { MemoryRouter } from 'react-router-dom';

import { queryClientOptions } from '@/react-query/query-client';

// make a function to generate a unique query client for each test
const generateQueryClient = () => {
  if (!queryClientOptions.defaultOptions) {
    queryClientOptions.defaultOptions = {};
  }

  // `defaultOptions.queries`가 정의되어 있지 않으면 초기화
  if (!queryClientOptions.defaultOptions.queries) {
    queryClientOptions.defaultOptions.queries = {};
  }

  // `retry` 설정
  queryClientOptions.defaultOptions.queries.retry = false;

  return new QueryClient(queryClientOptions);
};

// reference: https://testing-library.com/docs/react-testing-library/setup#custom-render
function customRender(ui: ReactElement, client?: QueryClient) {
  const queryClient = client ?? generateQueryClient();

  return RtlRender(
    <QueryClientProvider client={queryClient}>
      <MemoryRouter>{ui}</MemoryRouter>
    </QueryClientProvider>,
  );
}

// re-export everything
// eslint-disable-next-line react-refresh/only-export-components
export * from '@testing-library/react';

// override render method
export { customRender as render };
