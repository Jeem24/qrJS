
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
    
    return QRCode.toDataURL(texto)
}

function qrBuffer(dato1) {
    return QRCode.toBuffer(dato1);
}

/* generarQR()
    .then(result => console.log(result))
    .catch(err => console.log(err)); */


export { qrURL, qrBuffer }


