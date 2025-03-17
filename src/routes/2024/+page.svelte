<script>
    import { TITLE } from "$lib/consts";
    import { goto } from "$app/navigation";
    import { tabNum } from "$lib/store/tab-num";
</script>

<svelte:head>
    <title>{TITLE} - ACM Multimedia 2024</title>
    <meta name="description" content={TITLE}/>
</svelte:head>

<div class="flex flex-col min-h-screen">
    <div class="flex-1"/>
    <div class="flex-1"/>
    <div class="hero bg-base-100">
        <div class="hero-content text-center">
            <div class="max-w-5xl">
                <h1 class="text-5xl font-bold">2024 {TITLE}</h1>
                <p class="text-xl py-6"><a href="https://2024.acmmm.org/" class="link link-info">ACM Multimedia 2024</a> Oct 28,
                    Melbourne</p>

                <div class="flex flex-wrap">
                    <div class="card w-full bg-base-200/50 shadow-xl m-5">
                        <div class="card-body">
                            <h2 class="card-title">Task 1: Video-Level Deepfake Detection</h2>
                            <p>Given an audio-visual sample containing a single speaker,
                                the task is to identify if the video is a deepfake or real.</p>
                        </div>
                    </div>
                    <div class="card w-full bg-base-200/50 shadow-xl m-5">
                        <div class="card-body">
                            <h2 class="card-title">Task 2: Deepfake Temporal Localization</h2>
                            <p>Given an audio-visual sample containing a single speaker, the task is to find out the
                                timestamps [start, end] in which the manipulation is done.
                                The assumption here is that from the perspective of spreading misinformation.</p>
                        </div>
                    </div>
                </div>

                <button class="btn btn-accent w-64 mr-10"
                        on:click={() => {
                        tabNum.set(1)
                        goto('/2024/program')
                    }}
                >Program
                </button>

                <button class="btn btn-primary w-64 mr-10"
                        on:click={() => {
                        tabNum.set(2)
                        goto('/2024/registration')
                    }}
                >Register
                </button>
            </div>
        </div>
    </div>
    <div class="flex-1"/>
    <div class="h-12 footer-pad"/>
</div>
