import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import connectDB from './config/db.js';
import noteRoutes from './routes/note.js';

const app = express();

dotenv.config();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json());

// DEFINE ROUTES
app.use('/api/notes', noteRoutes);

app.get('/', (req, res) => {
  res.send('HELLO FROM BACKEND!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server running  on port ${PORT}`.yellow.bold));
