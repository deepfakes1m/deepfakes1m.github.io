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
    
    $: version = $page.url.pathname.startsWith('/2024') ? '2024' : '2025';
    $: items = [
        { name: 'About', path: `/${version}`, id: 0, enabled: true },
        { name: 'Program', path: `/${version}/program`, id: 1, enabled: version === '2024' },
        { name: 'Registration', path: `/${version}/registration`, id: 2, enabled: version === '2024' },
        { name: 'Details', path: `/${version}/details`, id: 3, enabled: version === '2024' },
        { name: 'Evaluation', path: `/${version}/evaluation`, id: 4, enabled: version === '2024' },
        { name: 'Call For Papers', path: `/${version}/cfp`, id: 5, enabled: version === '2024' },
        { name: 'Important Dates', path: `/${version}/dates`, id: 6, enabled: version === '2024' },
        { name: 'Organization', path: `/${version}/organization`, id: 7, enabled: version === '2024' }
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
