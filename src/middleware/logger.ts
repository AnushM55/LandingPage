import { Context, Next } from 'hono'

export const logger = async (c: Context, next: Next) => {
  const start = Date.now()
  await next()
  const ms = Date.now() - start
  const status = c.res.status
  const method = c.req.method
  const url = c.req.url
  
  console.log(`${method} ${url} - ${status} - ${ms}ms`)
}
