require("../head")

const { Db } = require("../config")
const GenreSeeder = require("./genre.seeder")
const SingerSeeder = require("./singer.seeder")
const AlbumSeeder = require("./album.seeder")
const SongSeeder = require("./song.seeder")

const Seeder = async (callback) => {
    await Db.connect()

    await GenreSeeder(6)
    await SingerSeeder(10)
    await AlbumSeeder(6)
    await SongSeeder(8)

    callback()
}

Seeder(() => {
    process.exit(0)
})