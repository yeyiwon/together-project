import * as Sentry from '@sentry/nextjs';

export async function register() {
  if (
    process.env.NEXT_RUNTIME === 'nodejs' &&
    process.env.NEXT_PUBLIC_MSW === 'true'
  ) {
    const { server } = await import('~/src/mocks/server');
    server.listen({ onUnhandledRequest: 'bypass' });
  }

  if (process.env.NEXT_RUNTIME === 'nodejs') {
    await import('./sentry.server.config');
  }

  if (process.env.NEXT_RUNTIME === 'edge') {
    await import('./sentry.edge.config');
  }
}

export const onRequestError = Sentry.captureRequestError;
