import express, { Application } from 'express';

import 'dotenv/config'

import TotalSupplyController from './features/totalSupply/controller';
import LockedTokensController from './features/lockedTokens/controller';
import CirculatingSupplyController from './features/circulatingSupply/controller';

const app: Application = express();
app.use(express.json())
app.use('/totalSupply', TotalSupplyController)
app.use('/lockedTokens', LockedTokensController)
app.use('/circulatingSupply', CirculatingSupplyController)

export default app;