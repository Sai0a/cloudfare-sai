import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Sai Upadhyay ur api is ready')
})

export default app
