const logger = require('./logger')

function main(){
    logger.info('Ejecutando aplicación en puerto 3000');
    logger.debug('Se cargó el modulo log4js');
    logger.warn('Advertencia se inicio la aplicacion en modo de pruebas');
    logger.error('No se pudo iniciar la aplciacion porque falta un archivo');
}

main();