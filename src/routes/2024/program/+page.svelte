<script lang="ts">
    import { TITLE } from "$lib/consts";
    import ashishPhoto from "$lib/assets/AshishJaiman.jpg";
    import usmanPhoto from "$lib/assets/UsmanTarique.jpeg";

    const items = [
        { time: "09:00 - 09:10", speaker: "Abhinav Dhall", text: "Opening and welcome" },
        { time: "09:10 - 09:20", speaker: "Zhixi Cai", text: "Challenge and Dataset Description"},
        { time: "09:30 - 10:00", speaker: "Ashish Jaiman", text: "Keynote: Ashish Jaiman"},
        { time: "10:00 - 10:20", speaker: "Gradiant", text: "Paper 1: VIGO: audioVIsual fake detection and seGment localizatiOn\n"},
        { time: "10:20 - 11:00", speaker: "N/A", text: "Break (Morning Tea)"},
        { time: "11:00 - 11:20", speaker: "Maya", text: "Paper 2: MFMS: Learning Modality-Fused and Modality-Specific Features for Deepfake Detection and Localization Tasks\n"},
        { time: "11:20 - 11:40", speaker: "FAKE-DETECTOR", text: "Paper 3: Building Robust Video-Level Deepfake Detection via Audio-Visual Local-Global Interactions\n"},
        { time: "11:40 - 12:00", speaker: "Usman Tariq", text: "Talk: Cross-Cultural Deepfakes Analysis"},
        { time: "12:00 - 12:20", speaker: "Shreya Ghosh", text: "Challenge Results and Future Work"}
    ]

    const keynoteSpeakers = [
        { name: "Ashish Jaiman", photo: ashishPhoto, institution: "Microsoft Bing", link: "https://www.linkedin.com/in/ashishjaiman",
            biography: "Ashish Jaiman is an accomplished Product and Engineering leader with 18+ years of leadership experience at Microsoft. He is proud to have earned a position as a global thought leader in emerging and cutting-edge technologies including GenAI, Cyber Security, Cloud Native, and Responsible AI, having spoken and written on this topic extensively all his career."
        },
        { name: "Usman Tariq", photo: usmanPhoto, institution: "American University of Sharjah", link: "https://www.aus.edu/faculty/usman-tariq",
            biography: "Usman Tariq worked as a research scientist in the Computer Vision group at the Xerox Research Center, Europe, before joining AUS. Dr. Tariq's research interests include computer vision, image processing and machine learning, in general. More specifically, he is interested in deepafakes, object recognition, object detection, face recognition, soft biometrics, sparse coding and deep learning."
        }
    ]
</script>

<svelte:head>
    <title>Program Schedule</title>
    <meta name="description" content="Program of {TITLE}"/>
</svelte:head>

<div class="flex flex-col min-h-screen">

    <div class="h-16 w-full"/>
    <h1 class="text-4xl font-bold text-center mb-6">Challenge Program</h1>

    <div class="flex justify-center">
        <div class="flex flex-col" id="details-div">

            <div class="card w-full bg-base-200 shadow-xl mb-6">
                <div class="card-body">
                    <h2 class="card-title">Date</h2>
                    <p>Oct 28, 2024</p>
                    <h2 class="card-title">Location</h2>
                    <p>Meeting Room 219, Melbourne Convention and Exhibition Center</p>
                </div>
            </div>

            <div class="card w-full bg-base-200 shadow-xl mb-6">
                <div class="card-body">
                    <h2 class="card-title">Schedule (tentative)</h2>
                    <p>All times are in Melbourne time zone (AEDT,
                        <a class="link link-info" href="https://www.timeanddate.com/time/zone/australia/melbourne">GMT+11</a>).
                    </p>
                    <span class="mb-6"></span>
                    <div class="overflow-x-auto">
                        <table class="table bg-base-300">
                            <!-- head -->
                            <thead>
                                <tr>
                                    <th class="w-1/6">Time</th>
                                    <th>Speaker</th>
                                    <th>Title</th>
                                </tr>
                            </thead>
                            <tbody>
                                {#each items as item}
                                    <tr>
                                        <td>{item.time}</td>
                                        <td>{item.speaker}</td>
                                        <td>{item.text}</td>
                                    </tr>
                                {/each}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div class="card w-full bg-base-200 shadow-xl mb-6">
                <div class="card-body">
                    <h2 class="card-title">Speakers</h2>

                    {#each keynoteSpeakers as speaker}
                        <div class="flex py-2">
                            <div class="avatar w-1/4">
                              <div class="w-48 rounded">
                                <img src={speaker.photo}  alt=""/>
                              </div>
                            </div>
                            <div class="w-3/4">
                                <h3 class="text-3xl"><a class="link link-info" href={speaker.link}>{speaker.name}</a></h3>
                                <p>{speaker.institution}</p>
                                <p>Bio: {speaker.biography}</p>
                            </div>
                        </div>
                    {/each}
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
