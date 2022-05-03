import Creature from "~/server/data/creature";
import { pool } from "~/server/config/database";

export default class CreaturesService {

    public static async findAll(): Promise<Creature[]> {
        const { rows: creatures } = await pool.query('SELECT * FROM mausritter_companion.creatures');
        return creatures;
    }

    public static async findByName(name: string): Promise<Creature> {
        const { rows: creatures } = await pool.query('SELECT * FROM mausritter_companion.creatures WHERE name = {1}', [name]);
        return creatures[0];
    };

    public static async findBySlug(slug: string): Promise<Creature> {
        const { rows: creatures } = await pool.query('SELECT * FROM mausritter_companion.creatures WHERE slug = {1}', [slug]);
        return creatures[0];
    };
}
