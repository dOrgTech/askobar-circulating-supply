import express, { Application, Router } from 'express';
import bodyParser from 'body-parser'
import 'dotenv/config'

import { normalizePort } from './config/normalizePort';
import { formatResponse } from './middlewares/formatResponse';
import { setResponseFormat } from './middlewares/setResponseFormat';
import MainRouter from './router'

const app: Application = express();
app.use(bodyParser.json())
app.use('/:format', setResponseFormat, MainRouter)
app.use(formatResponse)

const port = normalizePort(process.env.PORT || '3500')

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})