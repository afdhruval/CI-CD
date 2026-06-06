import express from "express";

const app = express();

app.get("/", (req, res) => {
  return res.status(200).json({
    message: "route is clear",
  });
});

app.listen(3000, () => {
  console.log("server is running on 3000");
});
