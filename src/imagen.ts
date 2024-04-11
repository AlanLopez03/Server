import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import pool from "./database";
import fs from 'fs';




class Server
{
    public app: Application;
    constructor()
    {
        dotenv.config();
        this.app = express();
        this.config();
        this.routes();
    }
    config(): void {
        this.app.use(express.json({ limit: '50mb' }));
        this.app.use(express.urlencoded({ limit: '50mb', parameterLimit: 100000, extended: false }));
        this.app.use(express.static(__dirname + '/img'));
        this.app.set('port', process.env.PORT || 3002);
        this.app.use(morgan('dev'));
        this.app.use(cors());
    }
    
    routes(): void
    {           

        this.app.post('/uploadImagen', (req, res) => {
            const file = req.body.src;
            const name = req.body.nombre;
            const id = req.body.id;
            console.log(name)
            console.log(id)
            
            console.log(__dirname)
            const binaryData =
                Buffer.from(file.replace(/^data:image\/[a-z]+;base64,/, ""),
                    'base64').toString('binary');//Ya guarda por carpetas/pero la carpeta forzosamente debe existir
                    fs.writeFile(`${__dirname}/img/` +name+'/' +id + '.jpg', binaryData,

                    "binary",(err) => {
                    console.log(err);
                });
            res.json({ fileName: id + '.jpg' });
        });


    };

    start()
    {
        this.app.listen(this.app.get('port'), () =>
        {
            console.log(`Listening on port ${this.app.get('port')}`);
        });
    }
}

const server = new Server();
server.start();