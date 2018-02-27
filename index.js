const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/public/index.html`);
});

io.on('connection', (soc) => {
    console.log('User was connected');

    soc.on('message', (msg) => {
        soc.broadcast.emit('new message', msg);
    });

    soc.on('disconnect', () => {
        console.log('User was disconnected');
    });
});

http.listen(3000, () => {
    console.log('Listening on *:3000');
});
