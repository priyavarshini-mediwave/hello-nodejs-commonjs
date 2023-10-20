const express = require("express");
const { port } = require("./config");
const { stringLength } = require("../app/utils/stringlength");
const morgan = require("morgan");
const app = express();
app.use(morgan("combined"));
app.use(express.json());
const favs = [];
app.get("/:str", (req, res) => {
  const len = stringLength("priya");
  console.log(req.params.str);
  return res.json({ message: "Helloworld", length: len });
});
app.get("/", (req, res) => {
  //   res.json("Hello world");
  console.log(favs);
  res.json({
    data: favs,
  });
});
// });

app.post("/", (req, res) => {
  favs.push({
    id: new Date().getTime(),
    text: req.body,
  });
  //   let body = req.body;
  res.json({ favs, message: "pushed" });
  // message: body,
});
// });

app.put("/", (req, res) => {
  return res.json({
    message: "PUT route",
  });
});

app.put("/", (req, res) => {
  return res.json({
    message: "PUT route",
  });
});

// DELETE
app.delete("/", (req, res) => {
  return res.json({
    message: "DELETE route",
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
