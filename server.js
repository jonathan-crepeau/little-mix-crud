const express = require('express');
const app = express();
const routes = require('./routes');

const PORT = process.env.PORT || 3005;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('--Homepage--');
});

// SECTION - API Endpoints
// Singer routes
app.use('/api/v1/singer', routes.singer);


app.listen(PORT, () => {
    console.log(`Application is listening on ${PORT}..`);
});