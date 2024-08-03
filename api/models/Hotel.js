import mongoose from 'mongoose';

const HotelSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    type:{
        type: String,
        require: true
    },
    city:{
        type: String,
        require: true
    },
    adress:{
        type: String,
        require: true
    },
    distance:{
        type: String,
        require: true
    },
    photos:{
        type: [String],
    },
    desc:{
        type: String,
        require: true
    },
    rating:{
        type: Number,
        min:0,
        max:10
    },
    rooms:{
        type: [String],
    },
    cheapesPrice:{
        type: Number,
        require: true
    },    
    featured:{
        type: Boolean,
        default: false,
    },
})

export default mongoose.model("Hotel", HotelSchema)