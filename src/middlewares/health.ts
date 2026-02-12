/**
 * Health check middleware for Docker/Kubernetes probes.
 * Responds to GET /_health with 200 OK for liveness/readiness checks.
 */
export default () => {
  return async (ctx: { path: string; status: number; body: object }, next: () => Promise<void>) => {
    if (ctx.path === '/_health') {
      ctx.status = 200;
      ctx.body = { status: 'ok' };
      return;
    }
    await next();
  };
};
