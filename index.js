const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const PORT = process.env.PORT || 3001;
const logRoutes = require('./routes/logs');


app.use(cors());
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/logs', logRoutes);

app.listen(PORT, () => {
    console.log(`LynkUp: Listening on port no. ${PORT}`);
});

module.exports = app;