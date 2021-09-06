
require("./head")

const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const { Server, Db } = require("./config")
const router = require("./controllers")

const app = express()

Db.connect()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.use(morgan(":method :url :status :res[content-lngth] - :response-time ms"))
app.use(router)


Server.startServer(app)

