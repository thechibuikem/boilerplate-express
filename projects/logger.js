let express = require("express")//importing express
let app = express()//creating an express instance

// creating and giving my middleware logger access
app.use(function(req,res,next){
    console.log(
`${req.method} ${req.path} - ${req.ip}`
    )
    next()
})

//making the server runnable
const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`Server listening on port ${PORT}`)
})