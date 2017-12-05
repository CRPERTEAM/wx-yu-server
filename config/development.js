module.exports = {
  mongodb: {
    host: 'mongodb://localhost',
    database: '/test',
    opt: {
      useMongoClient: true,
      autoReconnect: true // 自动重连
    }
  }
};
