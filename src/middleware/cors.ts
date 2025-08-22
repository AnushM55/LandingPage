import { Context, Next } from 'hono'

export const cors = async (c: Context, next: Next) => {
  await next()
  
  c.header('Access-Control-Allow-Origin', '*')
  c.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  c.header('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  
  if (c.req.method === 'OPTIONS') {
    return new Response('', { status: 204 })
  }
}
