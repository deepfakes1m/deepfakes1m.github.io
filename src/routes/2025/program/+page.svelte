<script lang="ts">
    import { TITLE } from "$lib/consts";
    import junichiPhoto from "$lib/assets/JunichiYamagishi.jpg";

    const items = [
        { time: "09:00 - 09:10", speaker: "Organizers", text: "Opening and AV-Deepfake1M++ Dataset Description" },
        { time: "09:10 - 09:40", speaker: "Junichi Yamagishi", text: "Keynote: Junichi Yamagishi"},
        { time: "09:40 - 09:55", speaker: "Pindrop", text: "Paper 1:  Pindrop it! Audio and Visual Deepfake Countermeasures for Robust Detection and Fine Grained-Localization"},
        { time: "09:55 - 10:10", speaker: "XJTU SunFlower Lab", text: "Paper 2:  HOLA: Enhancing Audio-visual Deepfake Detection via Hierarchical Contextual Aggregations and Efficient Pre-training"},
        { time: "10:10 - 10:25", speaker: "KLASS", text: "Paper 3:  KLASSify to Verify: Audio-Visual Deepfake Detection Using SSL-based Audio and Handcrafted Visual Features"},
        { time: "10:25 - 10:30", speaker: "Shreya Ghosh", text: "Challenge Results and Future Work"}
    ]

    const keynoteSpeakers = [
        { name: "Junichi Yamagishi", photo: junichiPhoto, institution: "National Institute of Informatics", link: "https://www.linkedin.com/in/ashishjaiman",
            biography: `Junichi Yamagishi received a Ph.D. from the Tokyo Institute of Technology in 2006 for a thesis that pioneered speaker-adaptive speech synthesis. He is currently a Professor at the National Institute of Informatics in Tokyo, Japan. From 2011 to 2016, he held an EPSRC Career Acceleration Fellowship at the Centre for Speech Technology Research (CSTR), University of Edinburgh, U.K. Over the course of his career, he has authored or co-authored more than 400 peer-reviewed papers in international journals and conferences. His work includes Mesonet, the first study on deepfake facial video detection, and ASVspoof, a widely used benchmark database for training and evaluating deepfake audio detection models.

Dr. Yamagishi has held numerous leadership and editorial roles. He served as an elected member of the IEEE Speech and Language Technical Committee (2013–2019), Associate Editor for the IEEE/ACM Transactions on Audio, Speech, and Language Processing (2014–2017), Chair of ISCA SynSIG (2017–2021), and Senior Associate Editor for the same IEEE/ACM journal (2019–2023). He was also a member of the APSIPA Technical Committee on Multimedia Security and Forensics (2018–2023), and has been serving on the IEEE Signal Processing Society Education Board since 2021.

His contributions have been recognized with numerous prestigious awards, including the Itakura Prize from the Acoustical Society of Japan, the Kiyasu Special Industrial Achievement Award from the Information Processing Society of Japan, the Young Scientists’ Prize from the Minister of Education, Culture, Sports, Science and Technology, the JSPS Prize from the Japan Society for the Promotion of Science, and the Best Paper Award at the IEEE International Workshop on Information Forensics and Security (WIFS). He has also received the Docomo Mobile Science Award, the IEEE Biometrics Council’s BTAS/IJCB 5-Year Highest Impact Award, and the Award for Science and Technology (Research Category) from the Minister of Education, Culture, Sports, Science and Technology in 2010, 2013, 2014, 2016, 2017, 2018, 2023, and 2025.`
        },
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
                    <p>Oct 29, 2025</p>
                    <h2 class="card-title">Location</h2>
                    <p>Hayat, Dublin Royal Convention Centre</p>
                </div>
            </div>

            <div class="card w-full bg-base-200 shadow-xl mb-6">
                <div class="card-body">
                    <h2 class="card-title">Schedule (tentative)</h2>
                    <p>All times are in Dublin time zone (GMT,
                        <a class="link link-info" href="https://www.timeanddate.com/time/zone/ireland/dublin">GMT+0</a>).
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
