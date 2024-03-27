<script>
    import { TITLE } from "$lib/consts";
    import datasetStatsLight from "$lib/assets/dataset_stats_light.svg";
    import datasetStatsDark from "$lib/assets/dataset_stats_dark.svg";
    import { dataTheme } from "$lib/store/theme";
    import { display } from 'mathlifier';

    const displayedMath = display(`Score = \\frac{1}{8}\\sum_{IoU\\in\\{0.5,0.75,0.9,0.95\\}}AP@IoU
    +\\frac{1}{10}\\sum_{N\\in\\{50,30,20,10,5\\}}AR@N`);
</script>

<svelte:head>
    <title>Call For Papers in {TITLE}</title>
    <meta name="description" content="Call for papers in {TITLE}"/>
</svelte:head>

<div class="flex flex-col min-h-screen">

    <div class="h-16 w-full"/>
    <h1 class="text-4xl font-bold text-center">Call For Papers</h1>

    <br>

    <div class="flex justify-center">
        <div class="flex flex-col" id="details-div">

            <div class="card w-full bg-base-200 shadow-xl">
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
                    <p>
                        In the grand challenge, teams who participate in the test phase are invited to submit paper
                        describing their method for peer review.
                    </p>
                </div>
            </div>

            <br>

            <div class="card w-full bg-base-200 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">Submission Guideline</h2>
                    <p>
                        Participants are invited to submit the paper showcase the method for the challenge.
                        Submissions should be comprehensive, detailing methodologies, results, and implications.
                    </p>
                    <ol>
                        <li>- Paper length: 4 pages, excluding references.</li>
                        <li>- Format: ACM MM format.</li>
                        <li>- Language: English</li>
                        <li>- Submission: <span class="link link-info">TBD</span></li>
                    </ol>
                    <p>
                        All submissions will go through a
                        double-blind review process. All contributions must be submitted (along with supplementary
                        materials, if any) at this CMT link. Accepted papers will be published in the official ACM-MM
                        2024 main proceedings.
                    </p>
                </div>
            </div>

            <br>
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
