import Creature from "~/server/data/creature";
import CreatureAttack from "~/server/data/creatureAttack";

const cat = new Creature('Cat',15,15,15,10,1);
cat.warband = true;
cat.attacks = [
    new CreatureAttack('swipe', 6),
    new CreatureAttack('bite', 8),
];
cat.want = 'Wants to be served. If mice pledge fealty and give bribes, they may be allowed to live';
cat.variants = {
    name: 'Cat lords',
    options: [
        { name: 'Balthazar', description: 'Loves to eat the finest delicacies' },
        { name: 'Melchior', description: 'Loves gold, jewels and wealth' },
        { name: 'Solomon', description: 'Plays cruel games with captives' },
        { name: 'Hammurabi', description: 'Rules with harsh, unbending logic' },
        { name: 'Nefertiti', description: 'Loves art, poetry and beautiful things' },
        { name: 'Zenobia', description: 'Forming an army of conquest, wants to rule' },
    ],
};

const creatures = [
    cat,
    /*
    {
        ...creature('Centipede',8,10,12,8,1),
        attacks: [
            attack('venomous bite', 6, 'dex'),
        ],
        critical: 'Venom takes effect, d12 damage to STR',
        want: 'Wants to wander and devour',
        variants: {
            name: 'Chilling centipedes',
            options: [
                { name: 'Giant', description: 'As big as a snake. **12hp, STR 15, Armour 2**' },
            ],
        }
    },
    {
        ...creature('Crow',12,12,15,15,1),
        attacks: [
            attack('peck', 8),
        ],
        notes: 'Flies 3x normal speed, knows two songs',
        want: 'Wants to protect the secret hallowed places from those that would do them harm',
        variants: {
            name: 'Crow songs',
            options: [
                { name: 'Dawn', description: 'Create a blindingly bright light' },
            ],
        }
    },
    {
        ...creature('Faerie',6,10,15,15),
        attacks: [
            attack('silver rapier', 8),
        ],
        notes: 'Knows one spell',
        want: 'Wants to further the Faerie Queen’s strange agenda',
        variants: {
            name: 'Faerie agendas',
            options: [
                { description: '**Kidnapping** baby mice, to raise as their own' },
            ],
        }
    },
    {
        ...creature('Frog',6,12,15,8, 1),
        attacks: [
            attack('spear', 10),
            attack('tonge', 6),
        ],
        critical: 'Leap out of reach',
        notes: 'Always goes first unless surprised, leaps 2x normal speed',
        want: 'Wants to gallantly complete their quest',
        variants: {
            name: 'Frog knights-errant',
            options: [
                { name: 'Gwal', description: 'Strong, kind of heart and simple of mind' },
            ],
        }
    },
    {
        ...creature('Ghost',9,5,10,10),
        attacks: [
            attack('ghostly power'),
            attack('chilling tough', 8, 'wil'),
        ],
        critical: 'Possess the creature',
        notes: 'Only harmed by silver or magic weapons',
        want: 'Wants freedom from the pain that binds them to the mortal realm',
        variants: {
            name: 'Ghostly powers',
            options: [
                { name: 'Shimmer', description: 'Create d3 illusions of itself' },
            ],
        }
    },
    {
        ...creature('Mouse',3,9,9,9),
        attacks: [
            attack('sword', 6),
            attack('bow', 6),
        ],
        want: 'Wants to feel safe',
        variants: {
            name: 'Rival mouse adventurers',
            options: [
                { name: 'Thristle', description: 'Disgraced knight, still haughty' },
            ],
        }
    },
    {...creature('Owl',15,15,15,15,1),},
    {...creature('Rat',3,12,8,8,1),},
    {...creature('Snake',12,12,10,10,2),},
    {...creature('Spider',6,8,15,10,1),},
     */
];

export default class CreaturesService{

    public static findAll(): Creature[] {
        return creatures;
    }

    public static findByName(name: string): Creature {
        return creatures.find((creature) => creature.name === name)
    };

    public static findBySlug(slug: string): Creature {
        return creatures.find((creature) => creature.slug === slug)
    };
}
