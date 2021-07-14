const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const task = new Schema({
    id: String,
    title: String,
    startDate: String,
    endDate: String,
    progress: String,
    priority: String
})

const attendee = new Schema({
    id: String,
    name: String,
    tasks:[task]
})

const host = new Schema({
    id: String,
    name: String,
    tasks:[task]
})

const listOfData = new Schema({
    _id: mongoose.Types.ObjectId,
    hosts:[host],
    attendees:[attendee]
})


const Collab = mongoose.model('COLLAB',listOfData);

module.exports = Collab;