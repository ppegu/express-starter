const dotenv = require("dotenv")
const path = require("path")

const envPath = path.join(__dirname, '.env')

const result = dotenv.config({ path: envPath })
if (result.error) throw result.error

module.exports = result