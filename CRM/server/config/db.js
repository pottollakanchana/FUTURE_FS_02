onst mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const connString = 'mongodb+srv://kanchana:kanchana123@cluster0.v9xjl.mongodb.net/crm?retryWrites=true&w=majority';
    await mongoose.connect(connString);
    console.log('MongoDB Connected Successfully');
  } catch (error) {
    console.error('Database connection failed:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
