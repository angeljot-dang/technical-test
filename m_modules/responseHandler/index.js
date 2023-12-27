module.exports = (req, res, next) => {
    let code = (typeof req.response.code === 'undefined') ? 200 : req.response.code
    let data = (typeof req.response.data === 'undefined') ? '' : req.response.data
    let message = (typeof req.response.message === 'undefined') ? '' : req.response.message
    res.status(code).json({
        error: false,
        success: true,
        message: message,
        data: data
    })
}