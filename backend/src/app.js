import express from "express"; 
import cors from "cors"; 

import "dotenv/config"; 
import logger from "./utils/logger.js";
import { connect } from "./utils/database.connection.js";

//routes(middlewares)
import customerRoutes from "./routes/routes-customer.js";

require("dotenv").config();
// console.log(process.env)
const app = express(); 
const PORT = process.env.PORT || 3002; 
app.use(cors()); // use cors def open to any endppoint
// only access 3000 in frontend req app.use(cors({origin: "http://localhost:3000"}));
app.use(express.json({ limit: "2mb" })); // use express json increase limit



app.use('/get',customerRoutes);

app.listen(PORT, () => {

  //logger.info("konnektinn...");
  //connect();

  console.log(`Server running on port: ${PORT}`);

}); // listen to port


