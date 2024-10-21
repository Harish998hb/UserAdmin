import mongoose from "mongoose";
import cors from "cors";
import helmet from "helmet";
import express from "express";
import dotenv from "dotenv";

// Routes Import 
import {router as userRouter} from './routes/loginRoutes.js' 
import {router as gradeRouter} from './routes/gradesRoutes.js'

const app = express();

app.use(express.json());

// Helmet middleware  // Helmet provides security against intruders
app.use(helmet());

// CORS  Cross Orgin Resource Sharing
app.use(cors());

dotenv.config();

// Routes 
app.use('/auth',userRouter);
app.use('/marks',gradeRouter)

const port = process.env.PORT,
  userName = process.env.DB_USERNAME,
  pass = process.env.DB_PASSWORD,
  connection_string = `mongodb+srv://${userName}:${pass}@cluster0.iajehm1.mongodb.net/user_admin?retryWrites=true&w=majority`;

// Server Startup

app.listen("4000", () => {
  console.log("Server started ");
});

// MongoDB database Connection

mongoose
  .connect(connection_string)
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log("Error in connection ", err);
  });
