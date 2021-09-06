const { random, unique } = require("faker")
const mongoose = require("mongoose")
const { Log } = require("../config")
const { AlbumModel } = require("../models")

const seeder = async (count) => {
    await mongoose.connection.db
        .dropCollection("albums")
        .then(() => {
            Log.info("album collection dropped")
        })
        .catch((error) => {
            Log.error(error.message)
        })
        .finally(async () => {
            for (let i = 0; i < count; i++) {
                await AlbumModel.create({
                    name: unique(random.arrayElement, [["Aina", "Nok Yo Volume1", "Oya", "Majuli Koneng", "Kangkan", "Miriwood", "Gomuk"]], { maxRetries: count }),
                })
            }
            Log.info("album seeder completed")
        })
}

module.exports = seeder