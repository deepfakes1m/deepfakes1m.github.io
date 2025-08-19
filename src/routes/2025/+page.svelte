<script>
    import { TITLE } from "$lib/consts";
    import { tabNum } from '$lib/store/tab-num';
    import { goto } from '$app/navigation';
</script>

<svelte:head>
    <title>{TITLE} - ACM Multimedia 2025</title>
    <meta name="description" content={TITLE}/>
</svelte:head>

<div class="flex flex-col min-h-screen">
    <div class="flex-1"/>
    <div class="flex-1"/>
    <div class="hero bg-base-100">
        <div class="hero-content text-center">
            <div class="max-w-5xl">
                <h1 class="text-5xl font-bold">2025 {TITLE}</h1>
                <p class="text-xl py-6"><a href="https://2025.acmmm.org/" class="link link-info">ACM Multimedia 2025</a> Oct 29, Dublin</p>

                <p class="text-xl">The new 2025 challenge
                    builds on the successful <a class="link link-info" href="https://dl.acm.org/doi/abs/10.1145/3664647.3689145">
                    2024 challenge</a> to focus on the deepfake detection and localization.
                    This year the challenge is based on new <span class="text-primary font-bold">AV-Deepfake1M++</span> containing over 2 million samples!</p>

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
                        goto('/2025/program')
                    }}
                >Program
                </button>

                <button class="btn btn-primary w-64 mr-10"
                        on:click={() => {
                        tabNum.set(2)
                        goto('/2025/registration')
                    }}
                >Register
                </button>
            </div>
        </div>
    </div>
    <div class="flex-1"/>
    <div class="h-12 footer-pad"/>
</div>
