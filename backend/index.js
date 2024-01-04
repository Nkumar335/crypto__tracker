const express = require('express');
const cors = require('cors');
const cryptoTrackerRoute = require('./routes/routes')

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(cors())
app.use(cryptoTrackerRoute)


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


