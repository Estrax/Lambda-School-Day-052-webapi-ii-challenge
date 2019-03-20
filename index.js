const express = require('express');
const initMiddleware = require('./src/middleware');
const router = require('./src/router');

const app = express();
initMiddleware(app);
app.use('/api/posts', router);

const PORT = process.env.PORT || 5000;

app.listen(PORT, (err) => {
    if(err) throw err;
    console.log(`App running on port ${PORT}`);
});