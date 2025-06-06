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

    <div class="flex justify-center mt-6">
        <div class="flex flex-col" id="details-div">

            <div class="card w-full bg-base-200 shadow-xl mb-6">
                <div class="card-body">
                    <h2 class="card-title">Benchmark Platform</h2>
                    <p>We use Codabench (<a href="https://www.codabench.org/competitions/8724/?secret_key=d0684935-fbf8-4641-a28f-ac9bea72e0aa" class="link link-info">link</a>)
                    for evaluation. The benchmark will be from June 6 to June 30, 2025.
                    </p>
                    <p>
                        Similar to the last year's challenge, top performing teams will need to submit the code and models for verification and evaluation.
                    </p>
                </div>
            </div>
            
            <div class="card w-full bg-base-200 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">Submission Steps</h2>
                    <h4 class="font-bold">Step 1 - Benchmark platform:</h4>
                    <p>Sign up your account in Codabench and participate the challenge (please note all team should submit the form and send us the signed
                        EULA in <a href="{base}/2025/registration" class="link link-info"
                            on:click={() => {
                            tabNum.set(1)
                            goto('/2025/registration')
                        }}>registration</a>). The results from the teams which are not approved will not
                        be included in the final results.</p>

                    <br>
                    <h4 class="font-bold">Step 2 - Prepare predictions:</h4>
                    <p>Prepare your submission files with the format mentioned in <a href="{base}/2025/details" class="link link-info" on:click={() => {
                            tabNum.set(2)
                            goto('/2025/details')
                        }}>details</a>. Name your prediction files for <span class="italic">Task 1</span> as "prediction.txt",
                        prediction file for <span class="italic">Task 2</span> as "prediction.json"
                        (<span class="text-primary">make sure the JSON file size is less than 4GB</span>). You can include either or both
                        of them based on the tasks you participate, <span class="font-bold text-primary">then compress them as a zip file</span>.
                    </p>

                    <br>
                    <h4 class="font-bold">Step 3 - Submission:</h4>
                    <p>In Codabench tab "My Submissions", section "Submission upload", <span
                            class="font-bold text-primary">select the tasks and submit as your team</span>, then upload the zip file.</p>
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
