const path = require("path")

exports.GCS_KEY = path.join(__dirname, "../" + process.env.GCS_KEY_NAME)
exports.GCS_BUCKET = process.env.GCS_BUCKET
exports.GCS_PROJECTID = process.env.GCS_PROJECTID

exports.ROOT_DIR = path.join(__dirname, '../../')

exports.UPLOAD_DIR = path.join(this.ROOT_DIR, 'uploads')
