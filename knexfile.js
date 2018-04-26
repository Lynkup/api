module.exports = {
    development: {
        client: 'pg',
        connection: 'postgres://localhost/lynkup' || process.env.DATABASE_URL
    },
    test: {},
    production: {
        client: 'pg',
        connection:"postgres://dxikvlelusfknq:54da44c18fb65297acff293d9e2fda8b593000d0497cbf650e7c9117ca7b7293@ec2-54-225-200-15.compute-1.amazonaws.com:5432/da1kdqgbne8msj"
    }
}