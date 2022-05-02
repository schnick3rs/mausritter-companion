import Creature from "~/server/data/creature";
import { pool } from "~/server/config/database";

export default class CreaturesService{

    public static async findAll(): Promise<Creature[]> {
        const { rows: creatures } = await pool.query('SELECT * FROM mausritter_companion.creatures');
        return creatures;
    }
}
