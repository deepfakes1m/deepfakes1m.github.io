<script lang="ts">
    import ThemeButton from "$lib/components/ThemeButton.svelte";
    import { onMount } from "svelte";
    import { goto } from "$app/navigation";
    import { tabNum } from "$lib/store/tab-num";

    export let items: Array<{ name: string, path: string, id: number, enabled: boolean }>;

    function onClick(key: number, path: string) {
        tabNum.set(key);
        goto(path);
    }

    onMount(() => {
        tabNum.set(items.find(item => item.path === window.location.pathname)?.id);
    })
</script>

<div class="absolute top-0 right-0 p-10">
    <ThemeButton className="btn btn-ghost btn-circle"/>
</div>
<div class="p-10 flex justify-center">
    <div class="join">
        {#each items as item}
            <button class="join-item btn"
                    class:btn-disabled={!item.enabled}
                    class:btn-active={$tabNum === item.id}
                    class:btn-primary={$tabNum === item.id}
                    on:click={() => onClick(item.id, item.path)}>
                {item.name}
            </button>
        {/each}
    </div>
</div>