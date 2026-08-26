import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import { addRoutes } from './routes.js'
 
const api = express();
api.use(cors());
api.use (express.json());
addRoutes(api);

const port = process.env.PORT;

api.listen(port, 

  () => console.log(`-> API subiu com sucesso na porta ${port}`

  ));