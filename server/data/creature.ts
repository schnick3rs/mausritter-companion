import CreatureAttack from "~/server/data/creatureAttack";

interface Serializable<T> {
    deserialize(input: Object): T;
}

interface ICreature {
    name: string;
    warband: boolean;
    hp: number;
    str: number;
    dex: number;
    wil: number;
    armour;
    attacks: CreatureAttack[];
    critical: string;
    want: string;
    note: string;
    variants: object;
}

export default class Creature implements ICreature, Serializable<Creature>{
    name: string;
    slug: string;
    warband = false;
    hp: number;
    str: number;
    dex: number;
    wil: number;
    armour = 0;
    attacks: CreatureAttack[];
    critical: string;
    want: string;
    note: string;
    variants: object;

    constructor() {}

    public static build(name: string, hp: number, str: number, dex: number, wil: number, armour: number = 0) {
        let creature = new Creature();
        creature.name = name;
        creature.slug = name.toLowerCase();
        creature.hp = hp;
        creature.str = str;
        creature.dex = dex;
        creature.wil = wil;
        creature.armour = armour;
        return creature;
    }

    public label(): string {
        return this.name.toLowerCase();
    }

    public toJSON(): object {
        return {
            ...this,
            label: `this coog catz -> ${this.label()}`,
        }
    }

    deserialize(input): Creature {
        this.name = input.name;
        return this;
    }

}
