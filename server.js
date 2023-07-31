import express from 'express'
import cors from 'cors'
import users from './api/router.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api/v1/users', users)
app.use('*', (req, res) => {
    res.status(404).json({error: 'Page not found'})
})

export default app;