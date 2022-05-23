<script>
    import snarkdown from 'snarkdown';
    export let creature;

    const image='https://i.pinimg.com/originals/0d/72/f3/0d72f35db2305ef238e1fbc1d1151719.jpg';
</script>

<div class="text" style="width: 400px;">
    <img src={image} style="width: inherit;" alt="cat">
    <h1 class="title">{creature.name}</h1>
    <div style="background: lightgrey; padding: 10px; border-radius: 5px;">
        {#if creature.warband}
            <div><strong>Warband scale</strong></div>
        {/if}
        <div style="font-weight: 500">
            {creature.hp}hp,
            {creature.str} STR,
            {creature.dex} DEX,
            {creature.wil} WIL
            {#if creature.armour}
                , Armour {creature.armour}
            {/if}
        </div>
        {#if creature.attacks}
            <div>
                Attacks:
                {#each creature.attacks as attack}
                    {#if attack.die}
                        d{attack.die} {attack.name}
                    {/if}
                    {#if attack.stat && attack.stat !== 'str'}
                        <span style="font-weight: 300"> (damages {attack.stat.toUpperCase()})</span>
                    {/if}
                {/each}
            </div>
        {/if}
        <div>{creature.notes}</div>
    </div>
    <div>
        <em>{@html snarkdown(creature.wants)}</em>
    </div>

    {#if creature.variants}
        <div>
            <h3 class="title">{creature.variants.name}</h3>
            <ol style="margin: 0">
                {#each creature.variants.options as option}
                    <li>
                        <strong>{option.name}</strong> — {@html snarkdown(option.description)}
                    </li>
                {/each}
            </ol>
        </div>
    {/if}
</div>

<style>
    .title {
        font-family: Baskerville, serif;
    }

    .text {
        font-family: Calibri, sans-serif;
    }
</style>
