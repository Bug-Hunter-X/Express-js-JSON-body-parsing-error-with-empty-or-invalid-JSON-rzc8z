const express = require('express');
const app = express();
app.use(express.json());
app.post('/user', (req, res) => {
  try {
    console.log(req.body);
    if (Object.keys(req.body).length === 0) {
      return res.status(400).send('Request body is empty');
    }
    res.send('User created');
  } catch (error) {
    console.error('Error parsing JSON:', error);
    return res.status(400).send('Invalid JSON');
  }
});
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});