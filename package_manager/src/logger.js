const log4js = require("log4js");

log4js.configure({
    appenders:{
        //muestra en consola los logs
        console: {type:'console'} ,
        //maneja el archivo donce se depositara los logs de la app
        file: {type:'file', filename:'app.log'}
    },
    categories:{
        default: { appenders: ['console', 'file'], level: 'debug'}
    }
});

const logger = log4js.getLogger();

module.exports = logger;