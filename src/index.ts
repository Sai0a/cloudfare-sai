import { Hono } from 'hono'

const app = new Hono()

app.get('/api/sai', (c) => {
  return c.json({
    message:'Hello Sai Upadhyay ur api is ready',
    time: Date.now(),
    data: {
      id:1,
      name:"Sai"
    }
  })
})

export default app
