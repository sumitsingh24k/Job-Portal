import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/db.js'
import { clerkWebhooks } from './controllers/webhooks.js'
import companyRoutes from './routes/companyRoutes.js'
import connectCloudinary from './config/cloudinary.js'
import jobRoutes from './routes/jobRoutes.js'
import userRoutes from './routes/userRoutes.js'
import { clerkMiddleware } from '@clerk/express'
//initialize express
const app=express()


//connect to database
await connectDB()
await connectCloudinary()
//middlewear 
app.use(cors())
app.use(express.json())
// app.use(clerkMiddleware())


//Routes
app.get('/',(req,res)=>res.send('API Working'))
app.post('/webhooks',clerkWebhooks)
app.use('/api/company',companyRoutes)
app.use('/api/jobs',jobRoutes)
app.use('/api/users',userRoutes)

//port 

const PORT=process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log(`server is runing on port ${PORT}`)
})