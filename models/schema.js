import mongoose from "mongoose";
const schema = new mongoose.Schema({
    'name':{
        type:String,
        require:true
    },
    'city':{
        type:String,
        require:true
    },
    'email':{
        type:String,
        require:true
    },
    'contact':{
        type:String,
        require:true
    }
});

const StudentModel = new mongoose.model('crud', schema);
export default StudentModel;