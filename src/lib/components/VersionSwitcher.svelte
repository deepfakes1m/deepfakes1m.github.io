<script lang="ts">
    import { goto } from "$app/navigation";
    import { page } from '$app/stores';
    import { tabNum } from "$lib/store/tab-num";

    const versions = [
        { year: 2025, path: '/2025' },
        { year: 2024, path: '/2024' }
    ];

    $: currentPath = $page.url.pathname;
    $: currentVersion = versions.find(v => currentPath.startsWith(v.path))?.year;

    function switchVersion(version: number) {
        const targetVersion = versions.find(v => v.year === version);
        if (targetVersion) {
            // Maintain the same subpath when switching versions
            goto(`${targetVersion.path}`);
            tabNum.set(0);
        }
    }
</script>

<div class="dropdown dropdown-hover" id="version-switcher">
    <div tabindex="0" role="button" class="btn btn-circle btn-primary">{currentVersion}</div>
    <div class="h-4" />
    <ul tabindex="0" class="dropdown-content z-[1]">
        {#each versions as version}
            <li class="py-2">
                <button class="btn btn-ghost btn-circle justify-center"
                        class:btn-active={currentVersion === version.year}
                        on:click={() => switchVersion(version.year)}>
                    {version.year}
                </button>
            </li>
        {/each}
    </ul>
</div>
