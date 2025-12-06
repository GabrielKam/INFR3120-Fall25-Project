import mongoose from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';

const UserSchema = new mongoose.Schema({
    username:
    {
        type:String,
        default:"",
        trim:true,
        required:'Username is required'
    },
    /*password:
    {
        type:String,
        default:"",
        trim:true,
        required:'Password is required'
    },*/
    email:
    {
        type:String,
        default:"",
        trim:true,
        required:'email is required'
    },
    displayName:
    {
        type:String,
        default:"",
        trim:true,
        required:'displayName is required'
    },
    profilePicture: 
    {
        type: String,
        default: "default.jpg"
    },
    created:
    {
        type:Date,
        default:Date.now
    },
    updated:
    {
        type:Date,
        default:Date.now
    }
},
{
    collection:"user"
}
)
let options = ({MissingPasswordError:'Wrong/Missing Password'});
UserSchema.plugin(passportLocalMongoose,options);

export const User = mongoose.models.User || mongoose.model('User', UserSchema); //Fixes Overwrite Error