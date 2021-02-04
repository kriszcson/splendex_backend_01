const express = require('express');
const routes = require('./routes');


const app = express();
app.use(express.json());
app.use('/weather', routes);

app.get('/', (req, res) => {
    res.redirect('/weather');
});

app.get('/weather', (req, res) => {
    res.json({ message: "Welcome to my weather API!" });
});

app.get("*", (req, res) => {
    res.json({ error: "(404) Site not found!" });
})

app.set('port', process.env.PORT || 3000);

// Start listening on our port.
const server = app.listen(app.get('port'), () => {
    console.log(`Express server is listening on port ${server.address().port}`);
});