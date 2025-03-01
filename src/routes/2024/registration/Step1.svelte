<script>
    import step1Image from "$lib/assets/fill_form.webp";
    import MediaQuery from "$lib/components/MediaQuery.svelte";
</script>

<MediaQuery query="(min-width: 800px)" let:matches>
    {#if matches}
        <div class="card card-side bg-base-200/50 shadow-xl m-5">
            <figure><img class="w-72" src={step1Image} alt="Fill Form"/></figure>
            <div class="card-body">
                <h2 class="card-title">Step 1</h2>
                <p class="text-wrap w-64">
                    For participating in the challenge, the first step is to register your team. Please complete the
                    <span class="font-bold">form</span> with the required information.
                </p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary"
                            on:click={() => window.open("https://forms.office.com/r/yiqPZSQ1Ur", "_blank")}
                    >Complete Form
                    </button>
                </div>
            </div>
        </div>
    {:else}
        <div class="card bg-base-200/50 shadow-xl m-5">
            <figure><img class="w-80" src={step1Image} alt="Fill Form"/></figure>
            <div class="card-body">
                <h2 class="card-title">Step 1</h2>
                <p class="text-wrap w-64">
                    For participating in the challenge, the first step is to register your team. Please complete the
                    <span class="font-bold">form</span> with the required information.
                </p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary"
                            on:click={() => window.open("https://forms.office.com/r/yiqPZSQ1Ur", "_blank")}
                    >Complete Form
                    </button>
                </div>
            </div>
        </div>
    {/if}
</MediaQuery>
