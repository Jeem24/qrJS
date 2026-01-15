import express from 'express';
import { qrURL, qrBuffer } from '../qrGenerador.js'

const PORT = 3000

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Hola Mundo</h1>').status(200);
});

app.get('/test', (req, res) => {
    qrURL()
        .then(result => res.send(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
            </head>
            <body>
                <h1>QR Generator</h1>

                <img id="qrImg" src='${result}'>
            </body>
            </html>
            `).status(200))
        .catch(err => console.log(err));
});

app.get('/QRCode', (req, res) => {
    const data = req.query.data ?? 'texto no enviado';

    qrBuffer(data)
        .then(result => {
            console.log('nueva petición');
            console.log(data);
            res.setHeader('Content-Type', 'image/png');
            res.send(result).status(200);
        })
        .catch(err => console.log(err));
});

app.use((req, res, next) => {
    res.status(404).send('<h1>404 - Página no encontrada</h1>');
});


app.listen(PORT, () => {
    
    console.log(`Servidor ejecutándose en puerto: ${PORT}`);
})



