module.exports = {
    development: {
        client: 'pg',
        connection: 'postgres://localhost/lynkup' || process.env.DATABASE_URL
    },
    test: {},
    production: {
        client: 'pg',
        connection: process.env.DATABASE_URL
    }
}