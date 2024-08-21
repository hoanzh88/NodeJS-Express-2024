const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Use routes
app.use('/api/v1', require('./src/routes/v1'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});