<script>
    import step2Image from "$lib/assets/send_email.webp";
    import { EMAIL } from "$lib/consts";
    import eulaLink from "$lib/assets/eula_2025.pdf";
    import MediaQuery from "$lib/components/MediaQuery.svelte";
</script>

<MediaQuery query="(min-width: 800px)" let:matches>
    {#if matches}
        <div class="card card-side bg-base-200/50 shadow-xl m-5">
            <figure><img class="w-80" src={step2Image} alt="Movie"/>
            </figure>
            <div class="card-body">
                <h2 class="card-title">Step 2</h2>
                <p class="text-wrap w-64">
                    The second stage is the EULA agreement. Please download the dataset <span
                        class="font-bold">EULA</span>
                    and sign it at your end. Please email the signed EULA to
                    <a class="link link-info" href={"mailto:" + EMAIL}>{EMAIL}</a>
                </p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary"
                            on:click={() => window.open(eulaLink, "_blank")}
                    >Download EULA
                    </button>
                </div>
            </div>
        </div>
    {:else}
        <div class="card bg-base-200/50 shadow-xl m-5">
            <figure><img class="w-80" src={step2Image} alt="Movie"/>
            </figure>
            <div class="card-body">
                <h2 class="card-title">Step 2</h2>
                <p class="text-wrap w-64">
                    The second stage is the EULA agreement. Please download the dataset <span
                        class="font-bold">EULA</span>
                    and sign it at your end. Please email the signed EULA to
                    <a class="link link-info" href={"mailto:" + EMAIL}>{EMAIL}</a>
                </p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary"
                            on:click={() => window.open(eulaLink, "_blank")}
                    >Download EULA
                    </button>
                </div>
            </div>
        </div>
    {/if}
</MediaQuery>