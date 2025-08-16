import express from 'express'
import cors from 'cors'
import 'dotenv/config'
//initialize express
const app=express()

//middlewear 
app.use(cors())
app.use(express.json())


//Routes
app.get('/',(req,res)=>res.send('API Working'))

//port

const PORT=process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log(`server is runing on port ${PORT}`)
})