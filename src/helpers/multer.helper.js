const multer = require("multer")
var multerGoogleStorage = require("multer-cloud-storage");
const { GCS_KEY, GCS_BUCKET, GCS_PROJECTID } = require("../constants")
const shortid = require("shortid")
const mime = require("mime-types")

const OPTIONS = {
    keyFilename: GCS_KEY,
    bucket: GCS_BUCKET,
    projectId: GCS_PROJECTID,
    acl: 'private',
}

exports.uploadSongToGCSExample = multer({
    storage: multerGoogleStorage.storageEngine({
        ...OPTIONS,
        destination: ((req, file, cb) => {
            if (file.fieldname === 'cover') {
                cb(null, 'songs/covers/')
            }
            else if (file.fieldname === 'audio') {
                cb(null, 'songs/audios')
            }
            else cb(new Error(), null)
        }),
        filename: ((req, file, cb) => {
            let ext = mime.extension(file.mimetype);
            cb(null, `${shortid.generate()}.${ext}`);
        })
    })
});
