import express from "express";
import { connectDB } from "../Backend/config/db.js";
import authRoutes from './routes/auth.routes.js';
import dotenv from 'dotenv';

const app = express();

//LOAD DOTENV VAIRABLES
dotenv.config();

//DB CONNECTION
connectDB();

// Parse JSON request bodies
app.use(express.json());

//TEST SERVER
app.listen(5000, (err) => {
  if (!err) {
    console.log("Server started")
  }
  else {
    console.log("Server failed")
  }
});

//TEST GET 
app.get("/", (req, res) => {
  try {
    res.send('Server Ready')
  } catch (error) {
    console.log(`Error: ${error}`)
  }
})

//USER ROUTES
app.use("/api/auth", authRoutes);