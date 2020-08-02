import { Router } from "express"
import TotalSupplyController from './features/totalSupply/controller';
import LockedTokensController from './features/lockedTokens/controller';
import CirculatingSupplyController from './features/circulatingSupply/controller';

const router = Router()
router.use('/totalSupply', TotalSupplyController)
router.use('/lockedTokens', LockedTokensController)
router.use('/circulatingSupply', CirculatingSupplyController)

export default router