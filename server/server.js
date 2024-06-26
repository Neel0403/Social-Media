import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import { dbConnect } from "./dbConnect/dbConnect.js";
import cors from "cors";
import routes from "./routes/routes.js";

const app = express();
dotenv.config();

app.use(helmet());
app.use(morgan("common"));
app.use(cors({ origin: "*" }));
app.use(express.json());

app.use(routes);

app.listen(process.env.PORT || 8000, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
  dbConnect();
});
