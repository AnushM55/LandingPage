import { Context, Next } from 'hono'

export const errorHandler = async (c: Context, next: Next) => {
  try {
    await next()
  } catch (err) {
    console.error('Error occurred:', err)
    
    const status = err instanceof Error ? 500 : 500
    const message = err instanceof Error ? err.message : 'Internal Server Error'
    
    return c.json({
      error: message,
      status: status
    }, status)
  }
}
