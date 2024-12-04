import { setupServer } from 'msw/node';
import { homeHandlers } from './HomeHandlers';

const handlers = [...homeHandlers];

export const mswWorker = setupServer(...handlers);
