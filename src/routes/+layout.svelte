<script lang="ts">
    import "../app.css";
    import FooterBlock from "$lib/components/FooterBlock.svelte";
    import Navbar from "$lib/components/Navbar.svelte";
    import { themeChange } from "theme-change";
    import { onMount } from "svelte";
    import MediaQuery from "$lib/components/MediaQuery.svelte";
    import NavbarMobile from "$lib/components/NavbarMobile.svelte";
    import { dataTheme } from "$lib/store/theme";

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


    const items = [
        { name: 'About', path: '/', id: 0, enabled: true },
        { name: 'Registration', path: '/registration', id: 1, enabled: true },
        { name: 'Evaluation', path: '/evaluation', id: 2, enabled: false },
        { name: 'Details', path: '/details', id: 3, enabled: false },
        { name: 'Important Dates', path: '/dates', id: 4, enabled: true },
        { name: 'Organization', path: '/organization', id: 5, enabled: true }
    ]
</script>

<style>
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

<MediaQuery query="(min-width: 800px)" let:matches>
    {#if matches}
        <div class="fixed w-full" id="navbar-div">
            <Navbar items={items}/>
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