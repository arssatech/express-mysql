const express = require('express');
const usersRouter = require('./routes/users');
const logRequest = require('./middleware/logs');
const app = express();

app.use(logRequest);

app.use((req, res, next) => {
    console.log('log 2 terjadi request ke api ini');
    next();
});

app.use('/users', usersRouter);

app.get("/", (req, res, next) => {
    res.json({
        nama:"Siga Petra",
        email:"sigapetra02@gmail.com"
    });
});

app.post("/", (req, res, next) => {
    res.send('Hello Post Method');
});

app.listen(4000, () => {
    console.log('Server is running on port 4000');
});