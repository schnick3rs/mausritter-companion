import Creature from "$lib/data/creature";
import {map} from "$lib/database";

const mapToCreature = (row: any):Creature => {
    let item = new Creature();
    Object.assign(item, row);
    return item;
};

export default class CreaturesService {

    public static async findAll(): Promise<Creature[]> {
        return await map('SELECT * FROM mausritter_companion.creatures', [], mapToCreature);
    }

    public static async findByName(name: string): Promise<Creature> {
        const creatures = await map('SELECT * FROM mausritter_companion.creatures WHERE name = $1', [name], mapToCreature);
        return creatures[0];
    };

    public static async findBySlug(slug: string): Promise<Creature> {
        const creatures = await map('SELECT * FROM mausritter_companion.creatures WHERE slug = $1', [slug], mapToCreature);
        return creatures[0];
    };

}
