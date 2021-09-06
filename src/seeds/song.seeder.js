const { random, lorem } = require("faker")
const mongoose = require("mongoose")
const { Log } = require("../config")
const { SingerModel, GenreModel, SongModel, AlbumModel } = require("../models")

const seeder = async (count) => {
    await mongoose.connection.db
        .dropCollection("songs")
        .then(() => {
            Log.info("song collection dropped")
        })
        .catch((error) => {
            Log.error(error.message)
        })
        .finally(async () => {
            for (let i = 0; i < count; i++) {
                await SongModel.create({
                    title: random.arrayElement(["Ayang Ayang", "Aipe Menam Se", "Guni Arig", "Ngok Promise", "Polo Lolad Do", "Nolang Ngo", "Aidun Emna", "Ayang Asi", "O Ayna", "Ayang Ayangla"]),
                    cover: "songs/covers/default.jpg",
                    description: lorem.text(),
                    url: "songs/audios/default.mp3",
                })
                    .then(async (song) => {
                        await GenreModel.findRandom(async (error, genres) => {
                            if (error || !genres) Log.error(error.message)
                            else {
                                song.genre = genres[0]
                            }
                        })
                        await AlbumModel.findRandom(async (error, albums) => {
                            if (error || !albums) Log.error(error.message)
                            else {
                                song.album = albums[0]
                            }
                        })
                        await SingerModel.findRandom(async (error, singers) => {
                            if (error || !singers) Log.error(error.message)
                            else {
                                song.singer = singers[0]
                                await song.save() // this actually save the all async
                            }
                        })
                    })
                    .catch((error) => {
                        Log.error(error.message)
                    })
            }
            Log.info("song seeder completed")
        })
}

module.exports = seeder