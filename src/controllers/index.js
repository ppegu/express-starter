const { Router } = require("express")
const ApiController = require("./api")
const FileController = require("./files.controller")

const router = Router()

router.get("/", (req, res) => {
    return res.send("Welcome to Nitom Backend")
})

router.use("/api", ApiController)
router.use("/file", FileController)

module.exports = router