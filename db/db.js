import mongoose from "mongoose";
const db = async ()=>{
    const connect = await mongoose.connect('mongodb+srv://rishad:vFU6Ogmizkx8GRYr@cluster01.nftnp0l.mongodb.net/CRUD')
    if(connect){
        console.log('success')
    }else{
        console.log("failed")
    }
}

export default db;
