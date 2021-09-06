exports.success = (res, message, data) => {
    res.status(200).send({
        success: true,
        message,
        data,
    })
}
exports.trashed = (res, message, data) => {
    res.status(200).json({
        success: true,
        message,
    })
}
exports.error = (res, message, data) => {
    res.status(400).send({
        success: false,
        message,
        data,
    })
}

exports.return = (res, error, data, message) => {
    if (error || !data) return res.status(400).send({ success: false, message: error?.message })
    else return res.status(200).send({ success: true, message, data })
}

exports.authFailed = (res, message) => {
    return res.status(401).send({
        success: false,
        message,
    })
}

exports.created = (res, error, data, message) => {
    if (error || !data) return res.status(400).send({ success: false, message: error?._message, errors: error?.errors })
    else return res.status(201).send({ success: true, message, data })
}

exports.notFound = (res) => {
    return res.status(404).json({
        success: false,
        message: "404!! method not found!",
    })
}
