import express from 'express';
import { qrURL, qrBuffer } from '../qrGenerador.js'

const PORT = 3000

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Hola Mundo</h1>').status(200);
});

app.get('/qr', (req, res) => {
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
            `))
        .catch(err => console.log(err));
});

app.get('/generador', (req, res) => {
    const dato1 = req.query.dato1 ?? 'texto texto no enviado';

    qrBuffer(dato1)
        .then(result => {
            console.log('nueva petición');
            console.log(dato1)
            res.setHeader('Content-Type', 'image/png');
            res.send(result);
        })
        .catch(err => console.log(err));
});


app.listen(PORT, () => {
    
    console.log(`Servidor ejecutándose en puerto: ${PORT}`);
})



