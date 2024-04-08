module.exports = {
    apps: [{
      name: 'API',
      script: 'node src/build/index.js',
      watch: true
    }, {
      name: 'MailServer',
      script: 'nodemon src/build/app.js',
      watch: true
    }]
  };