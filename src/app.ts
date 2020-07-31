import express, { Application } from 'express';
import bodyParser from 'body-parser'
import 'dotenv/config'

import { normalizePort } from './config/normalizePort';
import TotalSupplyController from './features/totalSupply/controller';
import LockedTokensController from './features/lockedTokens/controller';
import CirculatingSupplyController from './features/circulatingSupply/controller';

const app: Application = express();
app.use(bodyParser.json())
app.use('/totalSupply', TotalSupplyController)
app.use('/lockedTokens', LockedTokensController)
app.use('/circulatingSupply', CirculatingSupplyController)

const port = normalizePort(process.env.PORT || '3500')

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})