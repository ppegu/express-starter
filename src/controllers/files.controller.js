const { Router } = require("express")
const path = require("path")
const { Resp } = require("../helpers");
const fs = require('fs');
const { UPLOAD_DIR } = require("../constants");
const mimeTypes = require('mime-types')

const router = Router()

router.get("/", (req, res) => {
    res.json({ success: true, message: "no files here anymore" })
})

const getLocalFileLocation = async (req, res) => {

    const { location, filename } = req.params

    const fileLocation = path.join(UPLOAD_DIR, location, filename)

    if (!fs.existsSync(fileLocation)) return Resp.notFound(res)

    const fileSize = fs.statSync(fileLocation).size

    const contentType = mimeTypes.lookup(fileLocation)

    const range = req.headers.range ? req.headers.range : "bytes=0-"

    const CHUNK_SIZE = 10 ** 6; // 1mb
    const start = Number(range.replace(/\D/g, ""));
    const end = Math.min(start + CHUNK_SIZE, fileSize - 1);

    res.writeHead(206, {
        "Content-Range": `bytes ${start}-${end}/${fileSize}`,
        "Accept-Ranges": "bytes",
        "Content-Length": end - start + 1,
        "Content-Type": contentType,
    });

    fs.createReadStream(fileLocation).pipe(res)
}

router.get("/:location/:filename", getLocalFileLocation)

const getLocalFileSubLocation = async (req, res) => {

    const { location, sub_location, filename } = req.params

    const fileLocation = path.join(UPLOAD_DIR, location, sub_location, filename)

    if (!fs.existsSync(fileLocation)) return Resp.notFound(res)

    const fileSize = fs.statSync(fileLocation).size

    const contentType = mimeTypes.lookup(fileLocation)

    const range = req.headers.range ? req.headers.range : "bytes=0-"

    const CHUNK_SIZE = 10 ** 6; // 1mb
    const start = Number(range.replace(/\D/g, ""));
    const end = Math.min(start + CHUNK_SIZE, fileSize - 1);

    res.writeHead(206, {
        "Content-Range": `bytes ${start}-${end}/${fileSize}`,
        "Accept-Ranges": "bytes",
        "Content-Length": end - start + 1,
        "Content-Type": contentType,
    });

    fs.createReadStream(fileLocation).pipe(res)
}

router.get("/:location/:sub_location/:filename", getLocalFileSubLocation)


module.exports = router
