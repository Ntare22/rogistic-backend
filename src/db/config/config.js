import env from '../../env'

module.exports =  {
    development: {
        url: env.DEV_DB,
        dialect: 'postgres',
        logging: false
    },
    test: {
        url: env.TEST_DB,
        dialect: 'postgres',
        logging: false
    },
    production: {
        url: env.PROD_DB,
        dialect: 'postgres',
        logging: false
    }
}

