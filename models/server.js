const express = require('express');
const cors = require('cors');


class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.server = require('http').createServer(this.app);
        this.io = require('socket.io')(this.server);

        this.paths = {}

        //Middlewares
        this.middlewares();

        //Routes
        this.routes();

        //Sockets
        this.sockets();
    }

    middlewares() {

        //Cors
        this.app.use(cors());

        //Public folder
        this.app.use(express.static('public'));

        //Fileupload
        // this.app.use(fileUpload({
        //     useTempFiles : true,
        //     tempFileDir : '/tmp/',
        //     createParentPath: true
        // }));
    }

    routes() {}

    sockets(){
        this.io.on('connection', socket  => {
            console.log('Socket connected', socket.id);

        socket.on('disconnect', () => {
            console.log('Disconnect' , socket.id);
        });  
        
        socket.on('send-msg', (payload) => {
            console.log(payload);
        });
    });
  }

  listen() {
        this.server.listen(this.port, () => console.log('Server started on port', this.port));
    }

  }


module.exports = Server;