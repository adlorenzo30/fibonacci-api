const router = require("express").Router();
const validate = require("./schema");
const fibonacci = require("./service/fibonacci");

router.get("/fibonacci/:index", (req, res) => {
  try {
    // validate input
    validate(req.params.index);

    // calculate value and send response
    res.status(200).send({ value: fibonacci(req.params.index) });
  } catch (error) {
    console.error(error);
    res.status(400).send(error.message);
  }
});

module.exports = router;
