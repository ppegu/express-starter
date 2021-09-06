const { Router } = require("express");
// const SampleController = require("./sample.controller")

const router = Router()

router.get("/", (req, res) => {
    return res.json({ success: true, message: "welcome to Nitom API's" })
})

// router.use(SampleController)

module.exports = router