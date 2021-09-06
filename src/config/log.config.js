const getTimeStamp = () => {
    return new Date().toISOString()
}

const info = (message, object) => {
    if (object) console.info(`[${getTimeStamp()}] [INFO] [${process.env.APP_NAME}] ${message}`, object)
    else console.info(`[${getTimeStamp()}] [INFO] [${process.env.APP_NAME}] ${message}`)
}

const debug = (message, object) => {
    if (object) console.debug(`[${getTimeStamp()}] [DEBUG] [${process.env.APP_NAME}] ${message}`, object)
    else console.debug(`[${getTimeStamp()}] [DEBUG] [${process.env.APP_NAME}] ${message}`)
}


const warn = (message, object) => {
    if (object) console.warn(`[${getTimeStamp()}] [WARN] [${process.env.APP_NAME}] ${message}`, object)
    else console.warn(`[${getTimeStamp()}] [WARN] [${process.env.APP_NAME}] ${message}`)
}

const error = (message, object) => {
    if (object) console.error(`[${getTimeStamp()}] [ERROR] [${process.env.APP_NAME}] ${message}`, object)
    else console.error(`[${getTimeStamp()}] [ERROR] [${process.env.APP_NAME}] ${message}`)
}

module.exports = Log = {
    info,
    debug,
    warn,
    error
}