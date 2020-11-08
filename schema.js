import mongoose from 'mongoose'

const channelSchema = mongoose.Schema({
    name: String,
    imageUrl: String,
    youtube: String
});

export default mongoose.model("youtube", channelSchema);