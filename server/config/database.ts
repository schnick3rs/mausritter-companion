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

export async function query(text, values = []) {
    return await pool.query(text, values)
}

export async function map(text, values = [], func) {
    console.debug('query:', text, values);
    const { rows } = await pool.query(text, values);
    return rows.map(row => func(row));
}

export const pool = p;
