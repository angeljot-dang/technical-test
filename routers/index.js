const predictRouter = require('./predict')

const routes = [{
    path: '/growth',
    router: predictRouter

}]
module.exports=routes
//likewise we can mention more routers here, instead of writing all routes in index.js