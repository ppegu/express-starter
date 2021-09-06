const mongoose = require("mongoose")
const Log = require("../log.config")

const OPTIONS = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    socketTimeoutMS: 30000,
    keepAlive: true,
    autoIndex: false,
    retryWrites: false,
}

const mongoUri = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_URI}/${process.env.MONGO_DATABASE}`


const connect = async () => {
    await mongoose.disconnect()

    await mongoose.connect(mongoUri, OPTIONS).then(() => {
        Log.info("mongoose connected successfully")
    }).catch((error) => {
        Log.error(error.message)
    })
}

const close = async () => {
    await mongoose.disconnect()
}

const clear = async () => {
    const collections = mongoose.connection.collections
    for (let key in collections) {
        await collections[key].deleteMany({})
    }
}


module.exports = {
    connect,
    close,
    clear
}