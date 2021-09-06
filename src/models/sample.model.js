const mongoose = require("mongoose")
const mongoose_delete = require("mongoose-delete")
const paginate = require("mongoose-paginate-v2")
const random = require("mongoose-simple-random")

const schema = new mongoose.Schema({
    title: { type: String, required: true },
}, { timestamps: true })

schema.plugin(mongoose_delete)
schema.plugin(paginate)
schema.plugin(random)

module.exports = mongoose.model("sample", schema)