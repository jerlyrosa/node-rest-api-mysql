import express from "express";
const app = express();
import * as dotenv from "dotenv";
dotenv.config();

// use port 3000 unless there exists a preconfigured port
const PORT = process.env.APP_PORT || 3000;

app.get("/", (req, res) => {
  res.send("Say Hi");
});

// app.get("/employees", async(req, res) => {

//   res.send("hi");
// });

// app.post("/employees", (req, res) => {
//   res.send("Post employees");
// });
// app.put("/employees", (req, res) => {
//   res.send("Put employees");
// });

// app.delete("/employees", (req, res) => {
//   res.send("Delete employees");
// });

app.listen(PORT, () => {
  console.log(`Server runing on port ${PORT}`);
});
