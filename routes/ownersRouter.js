const express = require("express");
const router = express.Router();
const ownerModel = require("../models/owner-model");

if (process.env.NODE_ENV === "development") {
  router.post("/create", async (req, res) => {
    try {
      let owners = await ownerModel.find();
      if (owners.length > 0) {
        return res
          .status(403)
          .send("You do not have permission to create owner");
      }

      let { fullname, email, password } = req.body;

      const createdOwner = await ownerModel.create({
        fullname,
        email,
        password,
      });
      res.status(201).send(createdOwner);

    } catch (error) {
      console.error(error);
      res.status(400).send({ error: error.message });
    }
  });
}

router.get("/admin", (req, res) => {
  let success = req.flash("success"); // <-- retrieve flash message
  res.render("createproducts", { success });
});

// console.log(process.env.NODE_ENV);

module.exports = router;
