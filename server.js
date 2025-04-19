const express = require('express');
const cors = require('cors');
const app = express();

// Middleware
/*app.use(cors({
  origin: [
    'http://localhost:8081',
    'exp://192.168.0.100:8081', // Your Expo URL
    'https://ai-chat-frontend.vercel.app' // If hosting frontend later
  ]
}));*/
app.use(cors()); // Allow all origins temporarily
app.use(express.json());

// Chat endpoint
app.post('/chat', (req, res) => {
    try {
      const userMessage = req.body.message;
      const aiResponse = { reply: "Hi! I'm your AI assistant." };
      setTimeout(() => res.json(aiResponse), 1000);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Server error" });
    }
  });

// Start server (Vercel provides PORT)
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});