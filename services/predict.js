//if any mongoose/sequelize query then we can create folder named as "repository"
//this folder will contain all mongoose queries structure
const fs = require('fs')
const path = require('path')
module.exports.userQues = async (req) => {
    userquestion = req.body && req.body.question
    if (userquestion) {
        req.response.data = "The projected growth rate is 5%"
        req.response.message = "Question answered"
    }
    
    filePath = path.join(__dirname, "user_question.txt")
    fs.appendFile(filePath, userquestion, (err) => {
        if (err) {
            console.log("err", err)
        }
    })
    return req.response
}

