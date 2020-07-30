import express, { Application } from 'express';
import bodyParser from 'body-parser'
import 'dotenv/config'

import { normalizePort } from './config/normalizePort';
import TotalSupplyController from './features/totalSupply/controller';

const app: Application = express();
app.use(bodyParser.json())
app.use('/totalSupply', TotalSupplyController)

const port = normalizePort(process.env.PORT || '3500')

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})