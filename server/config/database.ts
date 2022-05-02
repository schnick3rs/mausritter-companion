import pkg from 'pg';
const { Pool } = pkg;

let p;
try {
    p = new Pool({
        connectionString: useRuntimeConfig().databaseUrl,
        ssl: useRuntimeConfig().databaseDisableSsl ? false : {
            rejectUnauthorized: false,
        },
    });
} catch (e) {
    console.error(e);
}

export const pool = p;
