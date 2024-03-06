<script lang="ts">
    import ThemeButton from "$lib/components/ThemeButton.svelte";
    import { onMount } from "svelte";
    import { goto } from "$app/navigation";

    export let items: Array<{ name: string, path: string, id: number }>;
    let active: number | undefined = undefined;
    $: active;

    function onClick(key: number, path: string) {
        active = key;
        goto(path);
    }

    onMount(() => {
        active = items.find(item => item.path === window.location.pathname)?.id;
    })
</script>

<div class="fixed w-full">
    <div class="absolute top-0 right-0 p-10">
        <ThemeButton style="height: 48px"/>
    </div>
    <div class="p-10 flex justify-center">
        <div class="join">
            {#each items as item}
                <button class="join-item btn"
                        class:btn-active={active === item.id}
                        class:btn-primary={active === item.id}
                        on:click={() => onClick(item.id, item.path)}>
                    {item.name}
                </button>
            {/each}
        </div>
    </div>
</div>