const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

 //Allow requests from all possible clients
app.use(cors({
  origin: [
    'http://localhost:8081',
    'http://192.168.0.106:8081',  //Your previous IP
    'http://192.168.0.100:8081',  //Your current IP
    'exp://192.168.0.100:8081'    //For Expo Go app
  ]
}));

app.use(express.json());

 //Chat endpoint
app.post('chat', (req, res) => {
  const userMessage = req.body.message;
  const aiResponse = { reply: "Hi! I'm your AI assistant." };
  setTimeout(() => res.json(aiResponse), 1000);
});

 //Start server on ALL network interfaces
app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on
  - http://localhost:${port}
  - http://192.168.0.100:${port}`);
});