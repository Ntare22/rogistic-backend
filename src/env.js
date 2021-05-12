import dotenv from 'dotenv-extended';
import { resolve } from 'path';

dotenv.load({
    silent: true,
    defaults: resolve(__dirname, '../.env'),
    schema: resolve(__dirname, '../.env.sample'),
    errorOnExtra: false,
    errorOnRegex: false,
    includeProcessEnv: true,
    overrideProcessEnv: true,
});

export default {
    ...process.env,
    PORT: process.env.PORT,
    BASE_URL: process.env.BASE_URL,
    TEST_DB: process.env.TEST_DB,
    DEV_DB: process.env.DEV_DB,
    PROD_DB: process.env.DATABASE_URL,
}
