module.exports = {
  host: "localhost",
  port: 2345,
  mq: {
    host: 'redis',
    port: 6379
  },
  srv: {
    api_gateway: 'http://apigateway:3000',
  },
}