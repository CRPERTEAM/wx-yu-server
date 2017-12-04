module.exports = {
  mongodb: {
    host: "mongodb://172.16.162.40",
    database: '/test',
    opt: {
      useMongoClient: true,
      autoReconnect: true // 自动重连
    }
  }
};
