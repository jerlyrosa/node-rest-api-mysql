import app from "./app.js";

const PORT = process.env.APP_PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server runing on port ${PORT}`);
});
