function requireHTTPS(req, res, next) {
    // The 'x-forwarded-proto' check is for Heroku
    if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
        return res.redirect('https://' + req.get('host') + req.url);
    }
    next();
}


const path = require('path');
const express = require('express');
const app = express();

app.use(requireHTTPS);
app.use(express.static('./dist/FrontEndChatterBox'));

app.get('/*', (req, res) =>
    res.sendFile(path.join(__dirname, './public', {root: 'dist/FrontEndChatterBox'});
);



app.listen(process.env.PORT || 8000);
