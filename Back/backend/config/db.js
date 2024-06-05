import mongoose from "mongoose";

export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://clonezindex999:747392@cluster0.404d7be.mongodb.net/cc').then(()=>console.log("DB Connected"));
}