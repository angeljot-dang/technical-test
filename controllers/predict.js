const predictService = require('../services/predict')

module.exports.userQues = async (req, res, next) => {
    try {
        await predictService.userQues(req)
        next()

    } catch (err) {
        console.log("err", err)
        next(err)
    }
}