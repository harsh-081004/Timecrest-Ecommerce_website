import mongoose from "mongoose";

export const connectDB = async ()=>{
  await mongoose.connect('mongodb+srv://timecrest12:8140011666@cluster0.2l7f2.mongodb.net/TIMECREST').then(()=>console.log("DB Connected"));
}