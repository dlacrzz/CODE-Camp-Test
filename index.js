const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(__dirname));

app.get('/CODE-Camp-Test/', (req, res) => {
  res.sendFile(__dirname + '/CODE-Camp-Test/index.html');
});

app.get('/CODE-Camp-Test/index', (req, res) => {
  res.sendFile(__dirname + '/CODE-Camp-Test/index.html');
});

app.get('/CODE-Camp-Test/about', (req, res) => {
  res.sendFile(__dirname + '/CODE-Camp-Test/about.html');
});

app.get('/CODE-Camp-Test/contact', (req, res) => {
  res.sendFile(__dirname + '/CODE-Camp-Test/contact.html');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
