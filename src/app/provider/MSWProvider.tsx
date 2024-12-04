'use client';

import { useEffect, useState } from 'react';

export default function MswProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mswIsReady, setmswIsReady] = useState(false);

  useEffect(() => {
    async function enableMocking() {
      if (typeof window === 'undefined') {
        const { mswWorker } = await import('@/mocks/mock-worker/Server');
        mswWorker.listen();
      } else {
        const { mswWorker } = await import('@/mocks/mock-worker/Browser');
        await mswWorker.start({ onUnhandledRequest: 'bypass' });
      }
      setmswIsReady(true);
    }

    if (process.env.NEXT_PUBLIC_NODE_ENV_MODE === 'TEST') {
      enableMocking();
    } else {
      setmswIsReady(true);
    }
  }, []);

  if (!mswIsReady) {
    return null;
  }

  return <>{children}</>;
}
