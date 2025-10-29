<script lang="ts">
    import { TITLE } from "$lib/consts";
    import { tabNum } from "$lib/store/tab-num";
    import { goto } from "$app/navigation";
    import { base } from "$app/paths";

    const LINKS = {
        "AILS-NTUA": "https://www.ails.ece.ntua.gr",
        "KLASS": "https://klasses.com.sg",
        "Pindrop Labs": "https://www.pindrop.com/"
    }

    function renderTeamName(teamName: string) {
        if (teamName in LINKS) {
            return `<a href="${LINKS[teamName as keyof typeof LINKS]}" target="_blank" class="link link-info">${teamName}</a>`;
        }
        return teamName;
    }
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
                    <p>We use Codabench (<a href="https://www.codabench.org/competitions/9946/?secret_key=b7ae76c0-d896-4018-9676-5ab334f6a433" class="link link-info">testA</a>, <a href="https://www.codabench.org/competitions/10040/?secret_key=2dd6ae62-c1eb-4197-8af9-67d9edcd8910" class="link link-info">testB</a>)
                    for evaluation the test subsets.
                    </p>
                </div>
            </div>

            <div class="card w-full bg-base-200 shadow-xl mb-6">
                <div class="card-body">
                    <h2 class="card-title">Submission Steps</h2>
                    <h4 class="font-bold">Step 1 - Benchmark platform:</h4>
                    <p>Sign up your account in Codabench and participate the benchmark (please note all participants should submit the form and send us the signed
                        EULA in <a href="{base}/2025/registration" class="link link-info"
                            on:click={() => {
                            tabNum.set(2)
                            goto('/2025/registration')
                        }}>registration</a> to get the dataset).</p>

                    <span class="mb-6"></span>
                    <h4 class="font-bold">Step 2 - Prepare predictions:</h4>
                    <p>Prepare your submission files with the format mentioned in <a href="{base}/2025/details" class="link link-info" on:click={() => {
                            tabNum.set(3)
                            goto('/2025/details')
                        }}>details</a>. Name your prediction files for <span class="italic">Task 1</span> as "prediction.txt",
                        prediction file for <span class="italic">Task 2</span> as "prediction.json". You can include either or both
                        of them based on the tasks you participate, <span class="font-bold text-primary">then compress them as a zip file</span>.
                    </p>

                    <span class="mb-6"></span>
                    <h4 class="font-bold">Step 3 - Submission:</h4>
                    <p>In Codabench tab "My Submissions", section "Submission upload", <span
                            class="font-bold text-primary">select the tasks</span>, then upload the zip file.</p>
                </div>
            </div>

            <!-- <div class="card w-full bg-base-200 shadow-xl mb-6">
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
            </div> -->
            
            <!-- Classification Table -->
            <div class="card w-full bg-base-200 shadow-xl mb-6">
                <div class="card-body">
                    <h2 class="card-title text-2xl mb-4">Classification</h2>
                    <div class="overflow-x-auto">
                        <table class="table table-xs bg-base-300">
                            <thead>
                                <tr>
                                    <th class="w-4">#</th>
                                    <th>Team</th>
                                    <th>TestA</th>
                                    <th>TestB</th>
                                    <th>Average</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>{@html renderTeamName("XJTU SunFlower Lab")}</td>
                                    <td>0.9783</td>
                                    <td>0.9568</td>
                                    <td>0.9676</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>{@html renderTeamName("Pindrop Labs")}</td>
                                    <td>0.9249</td>
                                    <td>0.8936</td>
                                    <td>0.9093</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>{@html renderTeamName("KLASS")}</td>
                                    <td>0.9278</td>
                                    <td>0.8654</td>
                                    <td>0.8966</td>
                                </tr>
                                <!-- <tr>
                                    <td>4</td>
                                    <td>{@html renderTeamName("Mizhi Lab")}</td>
                                    <td>0.9178</td>
                                    <td>0.4877</td>
                                    <td>0.7028</td>
                                </tr> -->
                                <tr>
                                    <td>4</td>
                                    <td>{@html renderTeamName("KETI")}</td>
                                    <td>0.8799</td>
                                    <td>0.8407</td>
                                    <td>0.8603</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>{@html renderTeamName("AILS-NTUA")}</td>
                                    <td>0.8238</td>
                                    <td>0.7628</td>
                                    <td>0.7933</td>
                                </tr>
                                <!-- <tr>
                                    <td>7</td>
                                    <td>{@html renderTeamName("TrueSight")}</td>
                                    <td>0.7742</td>
                                    <td>-</td>
                                    <td>-</td>
                                </tr> -->
                                <tr>
                                    <td>-</td>
                                    <td>Baseline <a href="https://openaccess.thecvf.com/content_cvpr_2017/html/Chollet_Xception_Deep_Learning_CVPR_2017_paper.html" target="_blank" class="link link-info">Xception</a></td>
                                    <td>0.5509</td>
                                    <td>0.5729</td>
                                    <td>0.5619</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <!-- Temporal Localization Summary Table -->
            <div class="card w-full bg-base-200 shadow-xl mb-6">
                <div class="card-body">
                    <h2 class="card-title text-2xl mb-4">Temporal Localization</h2>
                    <div class="overflow-x-auto">
                        <table class="table table-xs bg-base-300">
                            <thead>
                                <tr>
                                    <th class="w-4">#</th>
                                    <th>Team</th>
                                    <th>TestA</th>
                                    <th>TestB</th>
                                    <th>Average</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>{@html renderTeamName("Pindrop Labs")}</td>
                                    <td>0.6720</td>
                                    <td>0.4703</td>
                                    <td>0.5712</td>
                                </tr>
                                <!-- <tr>
                                    <td>2</td>
                                    <td>{@html renderTeamName("Mizhi Lab")}</td>
                                    <td>0.5500</td>
                                    <td>0.1769</td>
                                    <td>0.3635</td>
                                </tr> -->
                                <tr>
                                    <td>2</td>
                                    <td>{@html renderTeamName("KLASS")}</td>
                                    <td>0.3536</td>
                                    <td>0.2435</td>
                                    <td>0.2986</td>
                                </tr>
                                <tr>
                                    <td>-</td>
                                    <td>Baseline <a href="https://www.sciencedirect.com/science/article/pii/S1077314223001984" target="_blank" class="link link-info">BA-TFD+</a></td>
                                    <td>0.1471</td>
                                    <td>0.1515</td>
                                    <td>0.1493</td>
                                </tr>
                                <tr>
                                    <td>-</td>
                                    <td>Baseline <a href="https://ieeexplore.ieee.org/document/10034605" target="_blank" class="link link-info">BA-TFD</a></td>
                                    <td>0.1354</td>
                                    <td>0.1117</td>
                                    <td>0.1236</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <!-- Temporal Localization TestA Table -->
            <div class="card w-full bg-base-200 shadow-xl mb-6">
                <div class="card-body">
                    <h2 class="card-title text-2xl mb-4">Temporal Localization on TestA</h2>
                    <div class="overflow-x-auto">
                        <table class="table table-xs bg-base-300">
                            <thead>
                                <tr>
                                    <th class="w-4">#</th>
                                    <th>Team</th>
                                    <th>TestA Score</th>
                                    <th>AP@0.5</th>
                                    <th>AP@0.75</th>
                                    <th>AP@0.9</th>
                                    <th>AP@0.95</th>
                                    <th>AR@50</th>
                                    <th>AR@30</th>
                                    <th>AR@20</th>
                                    <th>AR@10</th>
                                    <th>AR@5</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>{@html renderTeamName("Pindrop Labs")}</td>
                                    <td>0.6720</td>
                                    <td>0.7794</td>
                                    <td>0.6652</td>
                                    <td>0.4466</td>
                                    <td>0.3427</td>
                                    <td>0.8030</td>
                                    <td>0.8009</td>
                                    <td>0.7959</td>
                                    <td>0.7784</td>
                                    <td>0.7493</td>
                                </tr>
                                <!-- <tr>
                                    <td>2</td>
                                    <td>{@html renderTeamName("Mizhi Lab")}</td>
                                    <td>0.5500</td>
                                    <td>0.7281</td>
                                    <td>0.5830</td>
                                    <td>0.3268</td>
                                    <td>0.1546</td>
                                    <td>0.6520</td>
                                    <td>0.6520</td>
                                    <td>0.6520</td>
                                    <td>0.6520</td>
                                    <td>0.6514</td>
                                </tr> -->
                                <tr>
                                    <td>2</td>
                                    <td>{@html renderTeamName("KLASS")}</td>
                                    <td>0.3536</td>
                                    <td>0.5117</td>
                                    <td>0.4017</td>
                                    <td>0.1701</td>
                                    <td>0.0416</td>
                                    <td>0.4259</td>
                                    <td>0.4259</td>
                                    <td>0.4259</td>
                                    <td>0.4259</td>
                                    <td>0.4258</td>
                                </tr>
                                <tr>
                                    <td>-</td>
                                    <td>Baseline <a href="https://www.sciencedirect.com/science/article/pii/S1077314223001984" target="_blank" class="link link-info">BA-TFD+</a></td>
                                    <td>0.1471</td>
                                    <td>0.1401</td>
                                    <td>0.0235</td>
                                    <td>0.0005</td>
                                    <td>0.0000</td>
                                    <td>0.3280</td>
                                    <td>0.3017</td>
                                    <td>0.2661</td>
                                    <td>0.2088</td>
                                    <td>0.1611</td>
                                </tr>
                                <tr>
                                    <td>-</td>
                                    <td>Baseline <a href="https://ieeexplore.ieee.org/document/10034605" target="_blank" class="link link-info">BA-TFD</a></td>
                                    <td>0.1354</td>
                                    <td>0.0981</td>
                                    <td>0.0129</td>
                                    <td>0.0004</td>
                                    <td>0.0000</td>
                                    <td>0.3325</td>
                                    <td>0.2916</td>
                                    <td>0.2520</td>
                                    <td>0.1924</td>
                                    <td>0.1459</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <!-- Temporal Localization TestB Table -->
            <div class="card w-full bg-base-200 shadow-xl mb-6">
                <div class="card-body">
                    <h2 class="card-title text-2xl mb-4">Temporal Localization on TestB</h2>
                    <div class="overflow-x-auto">
                        <table class="table table-xs bg-base-300">
                            <thead>
                                <tr>
                                    <th class="w-4">#</th>
                                    <th>Team</th>
                                    <th>TestB Score</th>
                                    <th>AP@0.5</th>
                                    <th>AP@0.75</th>
                                    <th>AP@0.9</th>
                                    <th>AP@0.95</th>
                                    <th>AR@50</th>
                                    <th>AR@30</th>
                                    <th>AR@20</th>
                                    <th>AR@10</th>
                                    <th>AR@5</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>{@html renderTeamName("Pindrop Labs")}</td>
                                    <td>0.4703</td>
                                    <td>0.5268</td>
                                    <td>0.3558</td>
                                    <td>0.1631</td>
                                    <td>0.0901</td>
                                    <td>0.6872</td>
                                    <td>0.6799</td>
                                    <td>0.6696</td>
                                    <td>0.6439</td>
                                    <td>0.6030</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>{@html renderTeamName("KLASS")}</td>
                                    <td>0.2435</td>
                                    <td>0.3606</td>
                                    <td>0.2795</td>
                                    <td>0.1061</td>
                                    <td>0.0213</td>
                                    <td>0.2950</td>
                                    <td>0.2950</td>
                                    <td>0.2950</td>
                                    <td>0.2950</td>
                                    <td>0.2950</td>
                                </tr>
                                <!-- <tr>
                                    <td>3</td>
                                    <td>{@html renderTeamName("Mizhi Lab")}</td>
                                    <td>0.1769</td>
                                    <td>0.2000</td>
                                    <td>0.1470</td>
                                    <td>0.0835</td>
                                    <td>0.0370</td>
                                    <td>0.2370</td>
                                    <td>0.2370</td>
                                    <td>0.2370</td>
                                    <td>0.2370</td>
                                    <td>0.2366</td>
                                </tr> -->
                                <tr>
                                    <td>-</td>
                                    <td>Baseline <a href="https://www.sciencedirect.com/science/article/pii/S1077314223001984" target="_blank" class="link link-info">BA-TFD+</a></td>
                                    <td>0.1515</td>
                                    <td>0.1620</td>
                                    <td>0.0339</td>
                                    <td>0.0012</td>
                                    <td>0.0001</td>
                                    <td>0.3245</td>
                                    <td>0.2935</td>
                                    <td>0.2651</td>
                                    <td>0.2156</td>
                                    <td>0.1698</td>
                                </tr>
                                <tr>
                                    <td>-</td>
                                    <td>Baseline <a href="https://ieeexplore.ieee.org/document/10034605" target="_blank" class="link link-info">BA-TFD</a></td>
                                    <td>0.1117</td>
                                    <td>0.0463</td>
                                    <td>0.0057</td>
                                    <td>0.0002</td>
                                    <td>0.0000</td>
                                    <td>0.2871</td>
                                    <td>0.2514</td>
                                    <td>0.2203</td>
                                    <td>0.1681</td>
                                    <td>0.1250</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
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
