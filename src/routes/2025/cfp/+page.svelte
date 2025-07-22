<script>
    import { TITLE } from "$lib/consts";
    import datasetStatsLight from "$lib/assets/dataset_stats_light.svg";
    import datasetStatsDark from "$lib/assets/dataset_stats_dark.svg";
    import { dataTheme } from "$lib/store/theme";
    import { display } from 'mathlifier';
</script>

<svelte:head>
    <title>Call For Papers in {TITLE}</title>
    <meta name="description" content="Call for papers in {TITLE}"/>
</svelte:head>

<div class="flex flex-col min-h-screen">

    <div class="h-16 w-full"/>
    <h1 class="text-4xl font-bold text-center">Call For Papers</h1>

    <div class="flex justify-center mt-6">
        <div class="flex flex-col" id="details-div">

            <div class="card w-full bg-base-200 shadow-xl mb-6">
                <div class="card-body">
                    <h2 class="card-title">Call For Papers</h2>
                    <p>
                        The tremendous progress in generative AI has made the generation and manipulation of synthetic
                        data easier and
                        faster than before. To this end, multiple use cases are benefitting from it. The negative aspect
                        of this progress and
                        wide adoption of generative AI is deepfakes. Audio/image/video of an individual(s) is
                        manipulated using
                        generative methods without permission from the individual(s). This can make them be shown saying
                        or doing
                        something, which they may not have done in real. These unethically manipulated videos, popularly
                        known as
                        deepfakes have wide repercussions and negative effects on society in the form of the deepfakes’
                        potential in
                        spreading disinformation and misinformation. Deepfakes unfortunately are used for trolling
                        online as well.
                        Authentication systems such as video KYC (Know Your Customer) are also not resilient as often
                        face recognition
                        and verification systems are deceived when high-quality deepfakes are used. To this end, it is
                        important for
                        platforms and systems to be able to identify if manipulation has been performed on a media.
                        These systems,
                        which detect and analyse the deepfakes are referred to as deepfakes detectors.
                    </p>
<!--                    <p>-->
<!--                        In the grand challenge, teams who participate in the test phase are invited to submit paper-->
<!--                        describing their method for peer review.-->
<!--                    </p>-->
                </div>
            </div>

            <div class="card w-full bg-base-200 shadow-xl mb-6">
                <div class="card-body">
                    <h2 class="card-title">Submission Guideline</h2>
                    <p>
                        Paper Submission Deadline: August 1, 2025 <br/>
                        Final Decision: August 4, 2025 <br />
                        Camera Ready Deadline: August 10, 2025 <br />
                    </p>
                </div>
            </div>

            <div class="card w-full bg-base-200 shadow-xl mb-6">
                <div class="card-body">
                    <h2 class="card-title">CMT Acknowledgment</h2>
                    <p>
                        The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.
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
