//requireds
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {
    console.log('========================'.green);
    console.log(`==Tabla de ${base}==`.green);
    console.log('========================'.green);

    if (!Number(base)) {
        rej(`El valor ${base} no es un numero`);
        return;
    }
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${ base * i}\n`);
    }

}

crearArchivo = (base, limite = 10) => {
    return new Promise((res, rej) => {

        if (!Number(base)) {
            rej(`El valor ${base} no es un numero`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${ base * i}\n`;
        }

        fs.writeFile(`tablas/tabla del ${base} al ${limite}.txt`, data, (err) => {

            if (err) {
                rej(err);
            } else {
                res(`tabla del ${base} al ${limite}.txt`);
            }
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}