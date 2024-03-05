import mongoose from "mongoose";
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    eventName: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true,
    },
    eventType: {
        type: String,
        required: true
    },
    address: {
        type: String,    
        required: true
    },
    description: {
        type: String,
        required: true 
    },
    borough: {
        type: String,
        enum: ["The Bronx", "Queens", "Staten Island", "Brooklyn", "Manhattan"],
        required: true
    },
    neighborhood: {
        type: String,
        required: true
    },
    websiteLink: {type: String}
})

export default mongoose.model('events', eventSchema)