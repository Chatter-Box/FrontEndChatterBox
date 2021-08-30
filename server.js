const express = require('express');
const compression = require('compression');
const path = require('path');
const app = express();

app.use(compression());
app.use(express.static(path.join(dirname, 'build')));

app.get('*', function(req, res) {
    res.sendFile(path.join(dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('App is running on port ${PORT}');
});
