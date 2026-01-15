
/* 
    Ejemplo con commonJS (node)
    
    QRCode.toDataURL('Hola Mundo!', function(err, url){
        console.log(url);
    });

    QRCode.toString('Hola Mundo!', {type:'terminal'}, function(err, url){
        console.log(url);
    });
*/

import QRCode from 'qrcode'

function qrURL() {
    let texto = 'Hola mundo esto es un texto';
    
    return QRCode.toDataURL(texto, { errorCorrectionLevel: 'H', margin: 0 })
}

function qrBuffer(data) {
    return QRCode.toBuffer(data, { errorCorrectionLevel: 'H', margin: 0 });
}

/* generarQR()
    .then(result => console.log(result))
    .catch(err => console.log(err)); */


export { qrURL, qrBuffer }


