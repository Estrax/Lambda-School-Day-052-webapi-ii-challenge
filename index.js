const express = require('express');

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, (err) => {
    if(err) throw err;
    console.log(`App running on port ${PORT}`);
});