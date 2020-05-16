const argv = require('./config/yargs').argv;
const colors = require('colors');


const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js');


let comando = argv._[0];


switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo ${archivo.green} creado`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');
        break;
}






// console.log(process.argv);

// let argv2 = process.argv;

// console.log(argv2);
// console.log(argv.base);

// let parametro = argv2[2];
// let base = parametro.split('=')[1];