import express from 'express';
import cors from 'cors';
const app = express();

// Middleware
app.use(cors({
  origin: [
    'http://localhost:8081',
    'exp://192.168.0.100:8081',
    'https://ai-chat-frontend.vercel.app'
  ]
}));
app.use(express.json());

// Chat endpoint
app.post('/chat', (req, res) => {
  const userMessage = req.body.message;
  const aiResponse = { reply: "Hi! I'm your AI assistant." };
  setTimeout(() => res.json(aiResponse), 1000);
});

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});