import colors from 'colors';
import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      process.env.MONGO_URI || 'mongodb://localhost',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      }
    );
    console.log(colors.cyan(`MongoDB Connected: ${conn.connection.host}`));
  } catch (error) {
    console.error(
      colors.red.bold(`[MONGODB CONNECTION ERROR]: ${error.message}`)
    );
    process.exit(1);
  }
};

export default connectDB;
