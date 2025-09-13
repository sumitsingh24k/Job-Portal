import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/db.js'
import { clerkWebhooks } from './controllers/Webhooks.js'
//initialize express
const app=express()


//connect to database
await connectDB()

//middlewear 
app.use(cors())
app.use(express.json())


//Routes
app.get('/',(req,res)=>res.send('API Working'))
app.post('/webhooks',clerkWebhooks)



//port 

const PORT=process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log(`server is runing on port ${PORT}`)
})