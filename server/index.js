import express from "express";
import cors from "cors";
import connectDb from "./dbConnection.js";
import {
  getStudentsController,
  studentCountController,
} from "./controllers/studentController.js";

const app = express();

//database connection
connectDb();

app.use(express.json());
app.use(cors());

//routes
app.get("/api/get-students", getStudentsController);
app.get("/api/get-count", studentCountController);

app.listen(8000, () => {
  console.log("server running on port 8000");
});
