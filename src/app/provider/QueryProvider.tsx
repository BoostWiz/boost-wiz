'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { queryClientOptions } from '@/react-query/query-client';
import { useState, ReactNode } from 'react';

export default function QueryProvider({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient(queryClientOptions));

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
