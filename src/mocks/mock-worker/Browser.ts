import { setupWorker } from 'msw/browser';
import { homeHandlers } from './HomeHandlers';

const handlers = [...homeHandlers];

export const mswWorker = setupWorker(...handlers);
