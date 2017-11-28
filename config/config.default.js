'use strict';
const path = require('path');

module.exports = appInfo => {
    const config = {};

    // should change to your own
    config.keys = appInfo.name + '_1494745418918_6429';

    // add your config here
    config.view = {
        defaultViewEngine: 'nunjucks',
        mapping: {
            '.tpl': 'nunjucks',
        },
    };

    config.security = {
        csrf: {
            enable: false,
        },
    };

    config.logger = {
        dir: path.join(appInfo.baseDir ,'/logs/beecms'),
    };





    return config;
};
