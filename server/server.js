import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/db.js'
import { clerkWebhooks } from './controllers/Webhooks.js'
import companyRoutes from  './routes/companyRoutes.js '
import connectCloudinary from './config/cloudinary.js'


//initialize express
const app=express()


//connect to database
await connectDB()
await connectCloudinary()
//middlewear 
app.use(cors())
app.use(express.json())


//Routes
app.get('/',(req,res)=>res.send('API Working'))
app.post('/webhooks',clerkWebhooks)
app.use('/api/company',companyRoutes)



//port 

const PORT=process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log(`server is runing on port ${PORT}`)
})