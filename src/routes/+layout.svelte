<script lang="ts">
    import "../app.css";
    import FooterBlock from "$lib/components/FooterBlock.svelte";
    import Navbar from "$lib/components/Navbar.svelte";
    import { themeChange } from "theme-change";
    import { onMount } from "svelte";
    import MediaQuery from "$lib/components/MediaQuery.svelte";
    import NavbarMobile from "$lib/components/NavbarMobile.svelte";
    import { dataTheme } from "$lib/store/theme";
    import { page } from '$app/stores';
    import { currentVersion } from "$lib/store/version";

    onMount(() => {
        themeChange(false)
        if ($dataTheme === null) {
            const localStorageTheme: string | null = localStorage.getItem("theme")
            if (localStorageTheme === null) {
                const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)')
                dataTheme.set(prefersDarkMode.matches ? "dracula" : "cupcake")
                localStorage.setItem("theme", prefersDarkMode.matches ? "dracula" : "cupcake")
            } else {
                dataTheme.set(localStorageTheme)
            }
        }
    })
    
    $: items = [
        { name: 'About', path: `/${$currentVersion}`, id: 0, enabled: true },
        { name: 'Program', path: `/${$currentVersion}/program`, id: 1, enabled: $currentVersion === '2024' },
        { name: 'Registration', path: `/${$currentVersion}/registration`, id: 2, enabled: true },
        { name: 'Details', path: `/${$currentVersion}/details`, id: 3, enabled: true },
        { name: 'Evaluation', path: `/${$currentVersion}/evaluation`, id: 4, enabled: true },
        { name: 'Call For Papers', path: `/${$currentVersion}/cfp`, id: 5, enabled: true },
        { name: 'Important Dates', path: `/${$currentVersion}/dates`, id: 6, enabled: true },
        { name: 'Organization', path: `/${$currentVersion}/organization`, id: 7, enabled: true }
    ];
</script>

<style>
    @import "https://cdn.jsdelivr.net/npm/katex@0.16.4/dist/katex.min.css";

    :global(button.btn) {
        @apply rounded-3xl h-full;
    }

    :global(input.input) {
        @apply rounded-3xl;
    }

    :global(textarea.textarea) {
        @apply rounded-3xl;
    }

    body {
        @apply overflow-y-scroll;
    }
</style>

<MediaQuery query="(min-width: 800px) and (min-height: 720px)" let:matches>
    {#if matches}
        <div class="fixed w-full" id="navbar-div"
             class:fixed={!$page.url.pathname.endsWith("/details") && !$page.url.pathname.endsWith("/cfp") && !$page.url.pathname.endsWith("/evaluation") && !$page.url.pathname.endsWith("/program")}>
            <Navbar items={items}/>
        </div>
    {/if}
</MediaQuery>

<MediaQuery query="(min-width: 800px) and (max-height: 720px)" let:matches>
    {#if matches}
        <div class="w-full" id="navbar-div">
            <NavbarMobile items={items}/>
        </div>
    {/if}
</MediaQuery>

<MediaQuery query="(max-width: 800px)" let:matches>
    {#if matches}
        <div class="w-full" id="navbar-div">
            <NavbarMobile items={items}/>
        </div>
    {/if}
</MediaQuery>

<slot/>

<FooterBlock/>
