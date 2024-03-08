<script>
    import { TITLE } from "$lib/consts";
    import MediaQuery from "$lib/components/MediaQuery.svelte";
    import datasetStatsLight from "$lib/assets/dataset_stats_light.svg";
    import datasetStatsDark from "$lib/assets/dataset_stats_dark.svg";
    import { dataTheme } from "$lib/store/theme";
</script>

<svelte:head>
    <title>Task Details in {TITLE}</title>
    <meta name="description" content="Task details in {TITLE}"/>
</svelte:head>

<div class="flex flex-col min-h-screen">

    <div class="h-16 w-full"/>
    <h1 class="text-4xl font-bold text-center">Challenge Details</h1>

    <br>

    <div class="flex justify-center">
        <div class="flex flex-col w-2/3">

            <div class="card w-full bg-base-200 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">Dataset Summary</h2>
                    <p>For both tasks, we are using AV-Deepfake1M
                        (<a href="https://arxiv.org/abs/2311.15308" class="link link-info">Arxiv</a>,
                        <a href="https://github.com/ControlNet/AV-Deepfake1M" class="link link-info">GitHub</a>)
                        dataset. This dataset is a large scale dataset addressing the content-driven multimodal
                        deepfakes, which contains over 1M videos and 2K speakers in total.
                    </p>
                    {#if $dataTheme === "dracula"}
                        <img src={datasetStatsDark} alt="Dataset Stats" class="w-full"/>
                    {:else}
                        <img src={datasetStatsLight} alt="Dataset Stats" class="w-full"/>
                    {/if}

                    <p>In AV-Deepfake1M, each video only contain very few or no fake visual/audio segments.
                        We host the challenge targeting 2 tasks. The participants are expected to develop the models
                        on the train & val set, and submit the predictions on the test set. The winner will be
                        determined by the performance on the test set, and required to submit the code for the final
                        checking.
                    </p>
                </div>
            </div>

            <br>

            <div class="card w-full bg-base-200 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">Task 1: Video-Level Deepfake Detection</h2>
                    <p>
                        In this task, we aim to detect the deepfake videos with the video-level labels access.
                        Although the dataset containing the full annotation of the timestamps of the fake segments
                        (i.e. frame-level labels), the participants in this task <span class="font-bold">can only</span>
                        access the video-level label.
                    </p>
                    <p>
                        <span class="font-bold text-success">Real</span>: The video is real, which means there is no
                        fake segment in the video.
                    </p>
                    <p>
                        <span class="font-bold text-error">Fake</span>: The video is fake, which means there is at least
                        one fake segment in the video.
                    </p>
                    <p>
                        The model output should be single confidence number of the input video being <span
                            class="font-bold text-error">fake</span>. The expected submission format is like below.
                    </p>
                    <div class="mockup-code">
                        <pre><code>000001.mp4;0.9128</code></pre>
                        <pre><code>000002.mp4;0.9142</code></pre>
                        <pre><code>000003.mp4;0.0174</code></pre>
                        <pre><code>000004.mp4;0.2021</code></pre>
                    </div>
                </div>
            </div>

            <br>

            <div class="card w-full bg-base-200 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">Task 2: Deepfake Temporal Localization</h2>
                    <p>
                        In this task, we aim to temporal localize the fake segments in the videos with the full-level
                        labels access. The participants in this task can access the frame-level labels, which contains
                        the timestamps of the fake segments.
                    </p>
                    <p>
                        The model output should be the temporal localization of the fake segments in the input video.
                        The expected format is a json file with following structure.
                    </p>
                    <div class="mockup-code">
                        <pre><code>{"{"}</code></pre>
                        <pre><code>{"    \"000001.mp4\": ["}</code></pre>
                        <pre><code>{"        [0.9541, 4.0, 4.8],"}</code><code
                                class="text-warning">{" // [confidence to be fake, start time, end time]"}</code></pre>
                        <pre><code>{"        [0.2315, 4.24, 5.52],"}</code></pre>
                        <pre><code>{"        [0.0012, 0.48, 2.6],"}</code></pre>
                        <pre><code>{"        [0.0002, 6.56, 8.8],"}</code></pre>
                        <pre><code>{"        ..."}</code></pre>
                        <pre><code>{"    ],"}</code></pre>
                        <pre><code>{"    ..."}</code></pre>
                        <pre><code>{"}"}</code></pre>
                    </div>
                </div>
            </div>

            <br>

            <div class="card w-full bg-base-200 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">Frequently Answered Questions</h2>
                    <p>TBD</p>
                </div>
            </div>
        </div>
    </div>

    <br>

</div>
