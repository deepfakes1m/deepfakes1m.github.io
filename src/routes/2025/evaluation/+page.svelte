<script>
    import { TITLE } from "$lib/consts";
    import { tabNum } from "$lib/store/tab-num";
    import { goto } from "$app/navigation";
    import { base } from "$app/paths";
</script>

<svelte:head>
    <title>Evaluation in {TITLE}</title>
    <meta name="description" content="Submission in {TITLE}"/>
</svelte:head>

<div class="flex flex-col min-h-screen">

    <div class="h-16 w-full"/>
    <h1 class="text-4xl font-bold text-center">Evaluation</h1>

    <br>

    <div class="flex justify-center">
        <div class="flex flex-col" id="details-div">

            <div class="card w-full bg-base-200 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">Benchmark Platform</h2>
                    <p>We use Codabench
                    for evaluation the test set. <b>The details will be shared soon.</b>
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div class="h-12 footer-pad"/>
</div>

<style>
    @media (min-width: 800px) {
        div#details-div {
            @apply w-2/3;
        }
    }

    @media (max-width: 800px) {
        div#details-div {
            @apply w-11/12;
        }
    }
</style>
