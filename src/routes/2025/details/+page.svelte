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
    <title>Task Details in {TITLE}</title>
    <meta name="description" content="Task details in {TITLE}"/>
</svelte:head>

<div class="flex flex-col min-h-screen">

    <div class="h-16 w-full"/>
    <h1 class="text-4xl font-bold text-center">Challenge Details</h1>

    <br>

    <div class="flex justify-center">
        <div class="flex flex-col" id="details-div">

            <div class="card w-full bg-base-200 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">Dataset Summary</h2>
                    <p>For both tasks, we are using <span class="text-primary font-bold">AV-Deepfake1M++</span>
                        dataset. This dataset is a large scale dataset addressing the content-driven multimodal
                        deepfakes, which contains around 2M videos and more speakers in total than previous
                        AV-Deepfake1M.
                    </p>
                    <div class="overflow-x-auto">
                      <table class="table bg-base-300">
                        <!-- head -->
                        <thead>
                          <tr>
                            <th>Subset</th>
                            <th>#Videos</th>
                            <th>#Real</th>
                            <th>#Fake</th>
                            <th>#Frames</th>
                            <th>#Time</th>
                            <th>#Subjects</th>
                          </tr>
                        </thead>
                        <tbody>
                          <!-- row 1 -->
                          <tr>
                            <th>Training</th>
                            <td>1.10M</td>
                            <td>0.30M</td>
                            <td>0.80M</td>
                            <td>264M</td>
                            <td>2934H</td>
                            <td>2606*</td>
                          </tr>
                          <!-- row 2 -->
                          <tr>
                            <th>Validation</th>
                            <td>0.08M</td>
                            <td>0.02M</td>
                            <td>0.06M</td>
                            <td>18M</td>
                            <td>205H</td>
                            <td>1676*</td>
                          </tr>
                          <!-- row 3 -->
                          <tr>
                            <th>TestA</th>
                            <td>TBD</td>
                            <td>TBD</td>
                            <td>TBD</td>
                            <td>TBD</td>
                            <td>TBD</td>
                            <td>TBD</td>
                          </tr>
                          <tr>
                            <th>TestB</th>
                            <td>TBD</td>
                            <td>TBD</td>
                            <td>TBD</td>
                            <td>TBD</td>
                            <td>TBD</td>
                            <td>TBD</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <p class="text-sm">*The subjects in the training and validation sets are overlapped.</p>

                    <p>In AV-Deepfake1M++, each video only contain very few or no fake visual/audio segments.
                        We host the challenge targeting 2 tasks. The participants are expected to develop the models
                        on the <span class="text-primary">train</span> & <span class="text-primary">val</span> set, and
                        submit the predictions on the <span class="text-primary">testA</span> set. The top-3 winner will
                        be determined by the performance on the <span class="text-primary">testA</span> set, and
                        required to submit the training and testing code (Docker) for the final checking to determine
                        the final winner on the <span class="text-primary">testB</span> set.
                    </p>

                    <div class="collapse collapse-arrow bg-base-300">
                        <input type="checkbox"/>
                        <div class="collapse-title text-xl font-medium">
                            Metadata Details
                        </div>
                        <div class="collapse-content">
                            The metadata is a json file for each subset (train, val), which is a list of dictionaries.
                            The fields in the dictionary are as follows. Please note the
                            <span class="text-bold text-accent">frame-level labels</span> are only available in temporal
                            localization (Task 2).
                            <ul>
                                <li><span class="font-bold text-primary">file</span>: the path to the video file.</li>
                                <li><span class="font-bold text-primary">original</span>:
                                    if the current video is fake, the path to the original video;
                                    otherwise, the original path in the source dataset.
                                </li>
                                <li><span class="font-bold text-primary">split</span>: the name of the current subset.
                                </li>
                                <li><span class="font-bold text-primary">modify_type</span>:
                                    the type of modifications in different modalities, which can be
                                    ["real", "visual_modified", "audio_modified", "both_modified"]. We evaluate the
                                    deepfake detection (Task 1) performance based on this field.
                                </li>
                                <li><span class="font-bold text-primary">audio_model</span>: the audio generation model
                                    used for generating this video.
                                </li>
                                <li><span class="font-bold text-primary">video_model</span>: the visual generation model
                                    used for generating this video.
                                </li>
                                <li><span class="font-bold text-accent">fake_segments</span>:
                                    the timestamps of the fake segments. We evaluate the temporal localization (Task 2)
                                    performance based on this field.
                                </li>
                                <li><span class="font-bold text-accent">audio_fake_segments</span>:
                                    the timestamps of the fake segments in audio modality.
                                </li>
                                <li><span class="font-bold text-accent">visual_fake_segments</span>:
                                    the timestamps of the fake segments in visual modality.
                                </li>
                                <li><span class="font-bold text-primary">video_frames</span>: the number of frames in
                                    the video.
                                </li>
                                <li><span class="font-bold text-primary">audio_frames</span>: the number of frames in
                                    the audio.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <br>

            <div class="card w-full bg-base-200 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">Prepare the Dataset</h2>
                    <p>Please register the challenge and submit the EULA, then you will be shared with a huggingface repository.</p>

                    <div class="mockup-code">
                        <pre><code>{"huggingface-cli login"}</code></pre>
                        <pre><code>{"huggingface-cli download ControlNet/AV-Deepfake1M-PlusPlus --repo-type dataset --local-dir ./AV-Deepfake1M-PlusPlus"}</code></pre>
                    </div>

                    <p>Then, unzip the zip files. Please go to the subset you want to unzip, run</p>
                    <div class="mockup-code">
                        <pre><code>{"7z x train.zip.001"}</code></pre>
                    </div>
                    <p>It will unzip the all volumes automatically.</p>

                    <p>The dataloader from the <a href="https://github.com/ControlNet/AV-Deepfake1M" class="link link-info">AV-Deepfake1M SDK</a> might be helpful.</p>

                </div>
            </div>

            <br>

            <div class="card w-full bg-base-200 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">Task 1: Deepfake Detection with Limited Label Access</h2>
                    <p>
                        In this task, we aim to detect the deepfake videos with the video-level labels access.
                        Although the dataset containing the full annotation of the timestamps of the fake segments
                        (i.e. frame-level labels), the participants in this task <span class="font-bold">can only</span>
                        use the video-level label to train the model.
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
                        The metrics for this task is the <span class="font-bold">AUC</span> score.
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
                        <pre><code>...</code></pre>
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
                        The metrics for this task are AP (Average Precision) and AR (Average Recall).
                        {@html displayedMath}
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
                    <p>Q: Can external data be used in the challenge?</p>
                    <p>A: Only <span class="font-bold">public</span> external data can be used.</p>
                    <br>
                    <p>Q: Can foundation models be used in the challenge?</p>
                    <p>A: Yes if it is available <span class="font-bold">public</span>.</p>
                    <br>
                    <p>Q: Is there any example code?</p>
                    <p>A: Yes. The sample code xception for classification task and BA-TFD/BA-TFD+ for temporal localization task is available at
                        <a class="link link-info" href="https://github.com/ControlNet/AV-Deepfake1M/tree/master/examples">official repo</a>.
                    </p>
                    <br>
                    <p>Q: How to convert the segments label in metadata to frame-level and video-level labels?</p>
                    <p>A: Codes are below.</p>
                    <div class="mockup-code">
                        <pre><code class="text-warning">{"# real: 0, fake: 1"}</code></pre>
                        <pre><code class="text-warning">{"# frame_label is only for temporal localization task"}</code></pre>
                        <pre><code>{"frame_label = np.zeros(video_frames)"}</code></pre>
                        <pre><code>{"for start, end in segments:"}</code></pre>
                        <pre><code>{"    frame_label[int(start * fps):int(end * fps)] = 1"}</code></pre>
                        <pre><code class="text-warning">{"# video_label is for both classification and temporal localization task"}</code></pre>
                        <pre><code>{"video_label = len(segments) > 0"}</code></pre>
                    </div>

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
