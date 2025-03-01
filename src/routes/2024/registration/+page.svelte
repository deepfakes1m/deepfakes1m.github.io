<script>
    import { TITLE } from "$lib/consts";
    import MediaQuery from "$lib/components/MediaQuery.svelte";
    import Step1 from "./Step1.svelte";
    import Step2 from "./Step2.svelte";
</script>

<svelte:head>
    <title>Registration in {TITLE}</title>
    <meta name="description" content="About this app"/>
</svelte:head>

<div class="flex flex-col min-h-screen">

    <MediaQuery query="(min-width: 800px)" let:matches>
        {#if matches}
            <div class="h-36 w-full"/>
        {:else}
            <div class="h-16 w-full"/>
        {/if}
    </MediaQuery>
    <h1 class="text-4xl font-bold text-center">Challenge Registration</h1>

    <br>

    <div class="flex-1"/>

    <div class="flex flex-wrap justify-center">
        <Step1/>
        <Step2/>
    </div>
    <div class="flex-1"/>
    <div class="flex-1"/>
</div>

<style>
</style>