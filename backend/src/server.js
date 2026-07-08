import app from './app.js';
import connectDB from './config/db.js';
import env from './config/env.js';

const startServer = async () => {
  try {
    await connectDB(env.MONGO_URI);

    const PORT = env.PORT || 5000;

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
    
    } catch (error) {
      console.error('Error starting server:', error);
    }
};