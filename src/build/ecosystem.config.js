"use strict";
module.exports = {
    apps: [{
            name: 'API',
            script: 'node src/build/index.js',
            watch: true,
            env: {
                NODE_ENV: 'development'
            },
            env_production: {
                NODE_ENV: 'production'
            }
        }, {
            name: 'MailServer',
            script: 'node src/build/app.js',
            watch: true,
            env: {
                NODE_ENV: 'development'
            },
            env_production: {
                NODE_ENV: 'production'
            }
        }]
};
