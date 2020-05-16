const opc = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}



const argv = require('yargs')
    .command('listar', 'imprime la tabla', opc)
    .command('crear', 'crear archivo', opc)
    .help()
    .argv;


module.exports = {
    argv
}