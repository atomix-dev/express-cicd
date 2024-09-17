import express from 'express'

const app = express()

app.get('/', (req, res) => res.status(200).json({message: 'hooray'}))

app.listen(3000, console.log('listening at port 3000'))