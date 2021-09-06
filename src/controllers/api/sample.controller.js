const { Router } = require("express");
const { SampleModel } = require("../../models")
const { Resp } = require("../../helpers")

const router = Router()


const methodName = async (req, res) => {
    await SampleModel.paginate({}, { limit: 10, populate: [] }, (error, docs) => {
        return Resp.return(res, error, docs)
    })
}

router.get("/secret-url", methodName)

module.exports = router