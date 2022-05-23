export default class CreatureAttack {
    name: string;
    die: number = 0;
    stat: Stat = Stat.STR;

    constructor(name: string, die: number = 0, stat: Stat = Stat.STR) {
        this.name = name;
        this.die = die;
        this.stat = stat;
    }
}

enum Stat {
    STR = 'str',
    DEX = 'dex',
    WIL = 'wil',
}
