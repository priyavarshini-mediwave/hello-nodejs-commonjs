const express = require("express");
const { port } = require("./config");
const { stringLength } = require("../app/utils/stringlength");
const morgan = require("morgan");
const app = express();
app.use(morgan("combined"));
app.use(express.json());
app.get("/:str", (req, res) => {
  const len = stringLength(req.params.str);
  console.log(req.params.str);
  return res.json({ message: "Helloworld", length: len });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
