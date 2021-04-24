const express = require('express');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const app = express();
const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Application is running port on ${port}`);
});