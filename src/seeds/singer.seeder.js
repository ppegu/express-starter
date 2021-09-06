const { random, unique } = require("faker")
const mongoose = require("mongoose")
const { Log } = require("../config")
const { SingerModel } = require("../models")

const seeder = async (count) => {
    await mongoose.connection.db
        .dropCollection("singers")
        .then(() => {
            Log.info("singer collection dropped")
        })
        .catch((error) => {
            Log.error(error.message)
        })
        .finally(async () => {
            for (let i = 0; i < count; i++) {
                await SingerModel.create({
                    name: unique(
                        random.arrayElement,
                        [["Abhinov Doley", "Paba Gaurav", "Bio Pegu", "Chandra Kumar PatGiri", "Rupali Payeng", "Ruyir Pegu", "Dev Taid", "Dalimi Kuli", "Miro Migam", "Richma Panging"]],
                        { maxRetries: count }
                    ),
                    avatar: "https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2019/09/29/Pictures/_be3b3fd6-e2b8-11e9-a910-fb95b571a1f5.jpg"
                })
            }
            Log.info("singer seeder completed")
        })
}

module.exports = seeder