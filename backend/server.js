import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoute from "./routes/userRoute.js";
import noteRoute from "./routes/noteRoute.js";
import { errorHandler, notFound } from "./middlewares/errorMiddleware.js";
import path from "path";

const app = express();
dotenv.config();
connectDB();
app.use(express.json());

const port = process.env.PORT || 5000;


app.use("/api/users", userRoute);
app.use("/api/notes", noteRoute);


//process.env
//---- deployment-----//
const __dirname1 = path.resolve();
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname1, "/frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname1,"frontend" , "dist", "index.html"));
  });

} else {
  app.get("/", (req, res) => {
    res.send("Api is Running Successfully");
  });
}

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is start port http://localhost:${port}`);
});
