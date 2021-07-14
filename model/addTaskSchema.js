const mongoose = require('mongoose');

const addTaskSchema = new mongoose.Schema({
    title:{
        type: String,
        required:true
    },
    startDate:{
        type: String,
        required:true
    },
    endDate:{
        type: String,
        required:true
    },
    progress:{
        type: Number,
        required:true
    },
    priority:{
        type: String,
        required:true
    }
})

const Task = mongoose.model('TASK',addTaskSchema);

module.exports = Task;