import path from 'path';
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

const __dirname = path.resolve();

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  );
} else {
  app.get('/', (req, res) => {
    res.send('GUUNOBINDO API');
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server running  on port ${PORT}`.yellow.bold));
