const express=require("express")
const app= express()
const routes=require("./routers")
const responseHandler=require('./m_modules/responseHandler')

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use((req,res,next)=>{
    req.response={}
    next()
})

routes.forEach(route => {
    const {path,router}={...route}
    app.use(`/predictso${path}`,router)
       
});
app.use(responseHandler)

app.listen(8000,()=>console.log("Server is up"))

module.exports=app