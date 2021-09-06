const { random, unique } = require("faker")
const mongoose = require("mongoose")
const { Log } = require("../config")
const { GenreModel } = require("../models")

const GenreSeeder = async (count) => {
    await mongoose.connection.db
        .dropCollection("genres")
        .then(() => {
            Log.info("genre collection dropped")
        })
        .catch((error) => {
            Log.error(error.message)
        })
        .finally(async () => {
            for (let i = 0; i < count; i++) {
                await GenreModel.create({
                    name: unique(random.arrayElement, [["Nitom", "Oi Nitom", "Anu Nitom", "Classic", "Folk", "New", "Old"]], { maxRetries: count }),
                })
            }
            Log.info("genre seeder completed")
        })
}

module.exports = GenreSeeder