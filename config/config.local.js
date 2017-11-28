'use strict';


module.exports = appInfo => {

    const exports = {};

    exports.sequelize = {
        dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
        dialectOptions: {
            charset: 'utf8mb4'
        },
        database: 'beeotc',
        host: 'localhost',
        port: '3306',
        username: 'root',
        password: '',
        timezone: "+08:00"
    };
    exports.logger= {
        appLogName: `${appInfo.name}-web.log`,
            coreLogName: 'egg-web.log',
            agentLogName: 'egg-agent.log',
            errorLogName: 'common-error.log',
    }

    exports.redis= {
        client: {
            host: "localhost",
                port: "6379",
                password: "",
                db: '0',
        },
        agent: true,
    }

    exports.api={

    }


    return  exports;
};

