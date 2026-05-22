import "dotenv/config";
import app from "./app.js";
import connectDB from "./config/db.js";

const PORT = process.env.PORT || 5005;

// Start Server
const startServer = async () => {
  try {
    // 1. Connect to Database
    await connectDB();

    // 2. Start Express
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error("❌ Startup Failed:", err.message);
    
    // Optional: Start server anyway even if DB fails (for debugging routes)
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT} (DB Connection Failed)`);
    });
  }
};

startServer();