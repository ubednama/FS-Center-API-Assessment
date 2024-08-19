import mongoose from 'mongoose';

const cardSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true,
    },
    description:{
        type:String,
    },
    
},{timestamps:true})

const Card = mongoose.model('Card', cardSchema);
export default Card;