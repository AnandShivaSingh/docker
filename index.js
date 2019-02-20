const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Anand Shiva singh');
});
app.listen(6000, () => {
  console.log('Listening on port 5000');
});
