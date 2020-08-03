import express, { Application } from 'express';
import 'dotenv/config'

import  {
  controllers
} from './controllers';
import { errorHandler } from './middlewares/errorHandler';

const app: Application = express();

const requestHeaders = (_: express.Request, response: express.Response, next: express.NextFunction) => {
  response.header("Access-Control-Allow-Origin", "*");
  response.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
};

const toUse = [
  express.json(),
  requestHeaders
]

toUse.forEach(object => app.use(object));
app.use("/", controllers);
app.use(errorHandler)

export default app;