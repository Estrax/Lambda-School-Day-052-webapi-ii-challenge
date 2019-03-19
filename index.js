const express = require('express');
const middleware = require('./src/middleware');

const app = express();
initMiddleware(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT, (err) => {
    if(err) throw err;
    console.log(`App running on port ${PORT}`);
});