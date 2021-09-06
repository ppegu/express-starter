const http = require("http")
const https = require("https")
const { info } = require("./log.config")

const startServer = (app) => {
    const httpServer = http.createServer(app)
    const httpsServer = https.createServer(app)

    if (process.env.HTTPS === "true") {
        httpsServer.listen(process.env.HTTPS_PORT || 80, () => {
            info("https server is listening on port ", process.env.HTTPS_PORT)
        })

    }
    else {
        httpServer.listen(process.env.HTTP_PORT || 8000, () => {
            info("http server is listening on port ", process.env.HTTP_PORT)
        })
    }
}

module.exports = { startServer }