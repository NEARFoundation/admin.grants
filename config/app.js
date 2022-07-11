const config = {
  env: process.env.NODE_ENV || 'development',
  mongoUrl: process.env.MONGO_URL || 'mongodb://localhost:27017/fund3r',
  appName: process.env.APP_NAME || 'FUND3R',
};

module.exports = config;
