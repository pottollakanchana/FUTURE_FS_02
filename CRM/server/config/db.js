const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(mongodb+srv://public_user:internship2026@cluster0.v9xjl.mongodb.net/crm?retryWrites=true&w=majority');
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
