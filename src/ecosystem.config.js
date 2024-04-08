module.exports = {
    apps: [{
      name: 'API',
      script: './src/build/index.js',
      watch: true
    }, {
      name: 'MailServer',
      script: './src/build/app.js',
      watch: true
    }]
  };