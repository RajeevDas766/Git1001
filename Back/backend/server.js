import express from "express"
import cors from 'cors'
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config.js'
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"




// app config
const app = express()

// const cors = require("cors")
app.use(cors({
    origin: "*"
    // credentials:true,
    // // methods: ["GET" , "POST"],

}))

const port = 4000



//middleware
app.use(express.json())


//DB Connection
connectDB();


//api endpoints
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)


app.get("/",(req,res)=>{
    res.send("JPN")
})

app.listen(port,()=>{
    console.log(`Server starrted on http://localhost:${port}`);
})

//mongodb+srv://clonezindex999:747392@cluster0.404d7be.mongodb.net/?