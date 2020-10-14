import config from 'config';

export const HOST = config.get('host') as string;
export const PORT = config.get('port') as number;
export const MQ_HOST = config.get('mq.host') as string;
export const MQ_PORT = config.get('mq.port') as number;
export const SRV_POST = config.get('srv.post') as string;

export const TEST_ID = config.get('test.test_id') as string;
export const TEST_ACCOUNT = config.get('test.test_account') as string;
export const TEST_PASSWORD = config.get('test.test_password') as string;
export const TEST_TOKEN = config.get('test.test_token') as string;