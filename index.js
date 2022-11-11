import express from "express";

const app = express();

// use port 3000 unless there exists a preconfigured port
const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
  console.log(`Server runing on port ${PORT}`);
});
