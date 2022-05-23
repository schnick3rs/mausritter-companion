<script>
    import snarkdown from 'snarkdown';
    export let creatures;
</script>

<div>
    <h1>Creatures</h1>
    <table>
        <thead>
        <tr>
            <th>Name</th>
            <th>HP</th>
            <th>STR</th>
            <th>DEX</th>
            <th>WIL</th>
            <th>Armour</th>
            <th>Attacks</th>
            <th>Notes</th>
            <th>Wants</th>
            <th>Variants</th>
        </tr>
        </thead>
        <tbody>
        {#each creatures as creature}
            <tr>
                <td>
                    <a href="/bestiary/{creature.slug}">
                        {creature.name}
                    </a>
                </td>
                <td>{creature.hp}</td>
                <td>{creature.str}</td>
                <td>{creature.dex}</td>
                <td>{creature.wil}</td>
                <td>{creature.armour}</td>
                <td>
                    {#each creature.attacks as attack}
                    <div>
                        {#if attack.die}
                            <strong>d{attack.die}</strong> <strong>{attack.name}</strong>
                        {/if}
                        {#if attack.stat && attack.stat !== 'str'}
                            <span> (damages {attack.stat.toUpperCase()})</span>
                        {/if}
                    </div>
                    {/each}
                </td>
                <td>{creature.notes}</td>
                <td><em>{@html snarkdown(creature.wants)}</em></td>
                <td>
                    {#if creature.variants}
                    <span>{creature.variants.name}</span>
                    {/if}
                </td>
            </tr>
        {/each}
        </tbody>
    </table>
    <button >refresh</button>
</div>
