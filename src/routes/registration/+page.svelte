<script>
    import { EMAIL, TITLE } from "$lib/consts";
    import step1Image from "$lib/assets/fill_form.webp";
    import step2Image from "$lib/assets/send_email.webp";
    import eulaLink from "$lib/assets/eula.pdf";
</script>

<svelte:head>
    <title>Registration in {TITLE}</title>
    <meta name="description" content="About this app"/>
</svelte:head>

<div class="flex flex-col min-h-screen">

    <div class="h-36 w-full"/>
    <h1 class="text-4xl font-bold text-center">Challenge Registration</h1>

    <br>

    <div class="flex-1"/>

    <div class="flex flex-wrap justify-center">
        <div class="card card-side bg-base-200/50 shadow-xl m-5">
            <figure><img class="w-72" src={step1Image} alt="Fill Form"/></figure>
            <div class="card-body">
                <h2 class="card-title">Step 1</h2>
                <p class="text-wrap w-64">
                    For participating in the challenge, the first step is to register your team. Please complete the
                    <span class="font-bold">form</span> with the required information.
                </p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Complete Form</button>
                </div>
            </div>
        </div>
        <div class="card card-side bg-base-200/50 shadow-xl m-5">
            <figure><img class="w-72" src={step2Image} alt="Movie"/>
            </figure>
            <div class="card-body">
                <h2 class="card-title">Step 2</h2>
                <p class="text-wrap w-64">
                    The second stage is the EULA agreement. Please download the dataset <span
                        class="font-bold">EULA</span>
                    and sign it at your end. Please email the signed EULA to
                    <a class="text-info link" href={"mailto:" + EMAIL}>{EMAIL}</a>
                </p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary"
                            on:click={() => window.open(eulaLink, "_blank")}
                    >Download EULA
                    </button>
                </div>
            </div>
        </div>
    </div>
    <div class="flex-1"/>
    <div class="flex-1"/>
</div>

<style>
</style>