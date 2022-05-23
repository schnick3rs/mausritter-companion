<script>
    import CreatureView from '$lib/components/CreatureView.svelte';
    export let creature;
</script>

<svelte:head>
    <title>{creature.name}</title>
</svelte:head>

{#if creature}
    <div>
        <a href="/creatures">Back</a>
        <CreatureView {creature}></CreatureView>
    </div>
{/if}
