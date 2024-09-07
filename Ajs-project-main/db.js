import mongoose from 'mongoose'
import { DB } from '../constants.js'

export const connectDB = async ()=>{
    try{
        console.log("Connection instantiated")
        const connection = await mongoose.connect(DB)
        if(connection){
            console.log("Database Connection successful | on | " , connection.connection.host)
        }
    }catch(err){
        console.log("Database connection failed." , err)
    }
}