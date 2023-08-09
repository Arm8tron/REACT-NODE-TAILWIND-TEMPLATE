const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
require('dotenv').config()

const port = process.env.PORT || 3000; // or any other port number you prefer

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});