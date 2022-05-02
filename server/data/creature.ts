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

    constructor(name: string, hp: number, str: number, dex: number, wil: number, armour: number = 0) {
        this.name = name;
        this.slug = name.toLowerCase();
        this.hp = hp;
        this.str = str;
        this.dex = dex;
        this.wil = wil;
        this.armour = armour;
    }

    deserialize(input): Creature {
        this.name = input.name;
        return this;
    }

}
