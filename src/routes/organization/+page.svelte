<script>
    import Organizer from "$lib/components/Organizer.svelte";
    import { EMAIL, TITLE } from "$lib/consts";

    import zhixiAvatar from "$lib/images/zhixi.jpeg";
    import shreyaAvatar from "$lib/images/shreya.jpg";
    import abhinavAvatar from "$lib/images/AbhinavDhall.jpg";
    import munawarAvatar from "$lib/images/MunawarHayat.jpeg";
    import dimitriosAvatar from "$lib/images/DimitriosKollias.jpg";
    import kalinAvatar from "$lib/images/Kalin.jpeg";
    import usmanAvatar from "$lib/images/UsmanTarique.jpeg";
    import MediaQuery from "$lib/components/MediaQuery.svelte";
    import PCMember from "$lib/components/PCMember.svelte";
    import Divider from "$lib/components/Divider.svelte";
</script>

<svelte:head>
    <title>Organizers of {TITLE}</title>
    <meta name="description" content="About this app"/>
</svelte:head>

<div class="">

    <div class="h-36 w-full"/>
    <!--	Title-->
    <div>
        <h1 class="text-4xl font-bold text-center">Organizers</h1>
    </div>
    <br>

    <MediaQuery query="(min-width: 800px)" let:matches>
        {#if matches}
        <div class="flex justify-center">
            <Organizer name="Abhinav Dhall" affiliation="Flinders University"
                       image={abhinavAvatar}
                       url=""
                       className="p-2"
            />
            <Organizer name="Zhixi Cai" affiliation="Monash University"
                       image={zhixiAvatar}
                       url="https://profile.controlnet.space/"
                       className="p-2"
            />
            <Organizer name="Shreya Ghosh" affiliation="Curtin University"
                       image={shreyaAvatar}
                       url="https://staffportal.curtin.edu.au/staff/profile/view/shreya-ghosh-a2f9d3ca/"
                       className="p-2"
            />
            <Organizer name="Munawar Hayat" affiliation="Qualcomm/Monash University"
                       image={munawarAvatar}
                       url=""
                       className="p-2"
            />
        </div>
        <div class="flex justify-center">
            <Organizer name="Dimitrios Kollias" affiliation="Queen Mary University of London"
                       image={dimitriosAvatar}
                       url=""
                       className="p-2"
            />
            <Organizer name="Kalin Stefanov" affiliation="Monash University"
                       image={kalinAvatar}
                       url=""
                       className="p-2"
            />
            <Organizer name="Usman Tariq" affiliation="American University of Sharjah"
                       image={usmanAvatar}
                       url=""
                       className="p-2"
            />
        </div>
        {/if}
    </MediaQuery>
    <MediaQuery query="(max-width: 800px)" let:matches>
        {#if matches}
        <div class="grid justify-center">
            <Organizer name="Abhinav Dhall" affiliation="Flinders University"
                       image={abhinavAvatar}
                       url=""
                       className="p-2"
            />
            <Organizer name="Zhixi Cai" affiliation="Monash University"
                       image={zhixiAvatar}
                       url="https://profile.controlnet.space/"
                       className="p-2"
            />
            <Organizer name="Shreya Ghosh" affiliation="Curtin University"
                       image={shreyaAvatar}
                       url="https://staffportal.curtin.edu.au/staff/profile/view/shreya-ghosh-a2f9d3ca/"
                       className="p-2"
            />
            <Organizer name="Munawar Hayat" affiliation="Qualcomm/Monash University"
                       image={munawarAvatar}
                       url=""
                       className="p-2"
            />
            <Organizer name="Dimitrios Kollias" affiliation="Queen Mary University of London"
                       image={dimitriosAvatar}
                       url=""
                       className="p-2"
            />
            <Organizer name="Kalin Stefanov" affiliation="Monash University"
                       image={kalinAvatar}
                       url=""
                       className="p-2"
            />
            <Organizer name="Usman Tariq" affiliation="American University of Sharjah"
                       image={usmanAvatar}
                       url=""
                       className="p-2"
            />
        </div>
        {/if}
    </MediaQuery>

    <Divider/>

    <h1 class="text-4xl font-bold text-center">Program Committee</h1>
    <br>

    <div class="grid justify-center" id="pc-member-div">
        <PCMember name="Usman Tariq" affiliation="American University of Sharjah"
                   className="p-2 justify-center"
        />
        <PCMember name="Yamagishi Junichi" affiliation="National Institute of Informatics, Tokyo"
                   className="p-2 justify-center"
        />
        <PCMember name="Simon Woo" affiliation="Sungkyunkwan University"
                   className="p-2 justify-center"
        />
        <PCMember name="Subrahmanyam Murala" affiliation="Trinity College Dublin"
                   className="p-2 justify-center"
        />
        <PCMember name="Siwei Lyu" affiliation="Sunny Buffalo"
                   className="p-2 justify-center"
        />
        <PCMember name="Jyoti Joshi" affiliation="Kroop AI"
                   className="p-2 justify-center"
        />
    </div>

    <Divider/>

    <br>
    <h1 class="text-4xl font-bold text-center">Contact</h1>
    <br>

    <p class="text-2xl text-center">
        Email: <a href={"mailto:" + EMAIL} class="text-info">
        {EMAIL}
    </a>
    </p>
</div>

<style>
    @media (max-width: 640px) {
        #pc-member-div {
            @apply grid-cols-2;
        }
    }
    @media (min-width: 640px) and (max-width: 800px) {
        #pc-member-div {
            @apply grid-cols-4;
        }
    }
    @media (min-width: 800px) {
        #pc-member-div {
            @apply grid-flow-col;
        }
    }
</style>