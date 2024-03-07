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


<div class="navbar bg-base-300">
    <div class="navbar-start">
        <div class="dropdown">
            <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7"/>
                </svg>
            </div>
            <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52">
                {#each items.slice(1) as item, index}
                    <a href={item.path} on:click={() => onClick(item.id, item.path)} class="rounded-3xl my-2"
                       class:btn-active={index + 1 === $tabNum}
                       class:btn-disabled={!item.enabled}
                       class:text-neutral-content={!item.enabled}>
                        <li><p>{item.name}</p></li>
                    </a>
                {/each}
            </ul>
        </div>
    </div>
    <div class="navbar-center">
        <a class="btn btn-ghost text-sm" href="/" on:click={() => onClick(0, "/")}>1M-Deepfakes Detection Challenge</a>
    </div>
    <div class="navbar-end">
        <ThemeButton size="5" className="btn btn-ghost btn-circle"/>
    </div>
</div>
