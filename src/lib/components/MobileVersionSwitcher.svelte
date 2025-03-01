<script lang="ts">
    import { goto } from "$app/navigation";
    import { tabNum } from "$lib/store/tab-num";
    import { currentVersion } from "$lib/store/version";

    const versions = [
        { year: 2025, path: '/2025' },
        { year: 2024, path: '/2024' }
    ];

    $: currentYear = parseInt($currentVersion);

    function switchVersion(year: number) {
        const targetVersion = versions.find(v => v.year === year);
        if (targetVersion) {
            goto(`${targetVersion.path}`);
            tabNum.set(0);
        }
    }
</script>

<div class="dropdown dropdown-end">
    <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
        <span class="text-lg font-bold">{currentYear}</span>
    </div>
    <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box mt-3">
        {#each versions as version}
            <li class="py-2">
                <button 
                    class="btn btn-ghost justify-center text-lg"
                    class:btn-active={currentYear === version.year}
                    on:click={() => switchVersion(version.year)}
                >
                    {version.year}
                </button>
            </li>
        {/each}
    </ul>
</div>
