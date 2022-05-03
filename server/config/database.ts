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
    console.info('query:', text, values);
    return await pool.query(text, values)
}

export async function map(text, values = [], func) {
    const { rows } = await pool.query(text, values);
    let map = rows.map(row => func(row));
    console.info(rows, map)
    return map;
}

export const pool = p;
