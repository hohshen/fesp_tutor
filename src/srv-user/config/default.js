module.exports = {
  host: "localhost",
  port: 2345,
  mq: {
    host: '',
    port: 6379
  },
  srv: {
    api_gateway: 'http://localhost:3000',
    post: 'http://localhost:3456'
  },
  test: {
    test_id: 'U_ABC',
    test_account: 'ABC',
    test_password: 'ABC',
    test_token: 'i_am_jwt_token'
  }
}