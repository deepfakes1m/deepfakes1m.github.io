<script>
    import Organizer from "$lib/components/Organizer.svelte";
    import { EMAIL, TITLE } from "$lib/consts";

    import zhixiAvatar from "$lib/assets/zhixi.jpeg";
    import shreyaAvatar from "$lib/assets/shreya.jpg";
    import abhinavAvatar from "$lib/assets/AbhinavDhall.jpg";
    import usmanAvatar from "$lib/assets/UsmanTarique.jpeg";
    import mohamadAvatar from "$lib/assets/mohammad.jpeg";
    import MediaQuery from "$lib/components/MediaQuery.svelte";
    import PCMember from "$lib/components/PCMember.svelte";
    import Divider from "$lib/components/Divider.svelte";
</script>

<svelte:head>
    <title>Organizers of {TITLE}</title>
    <meta name="description" content="Organizers of {TITLE}"/>
</svelte:head>

<div class="">

    <MediaQuery query="(min-width: 800px)" let:matches>
        {#if matches}
            <div class="h-36 w-full"/>
        {:else}
            <div class="h-16 w-full"/>
        {/if}
    </MediaQuery>
    <!--	Title-->
    <h1 class="text-4xl font-bold text-center">Organizers</h1>
    <br>

    <MediaQuery query="(min-width: 830px)" let:matches>
        {#if matches}
            <div class="flex justify-center">
                <Organizer name="Abhinav Dhall" affiliation="Monash University"
                           image={abhinavAvatar}
                           url="https://sites.google.com/site/dhallabhinav/"
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
            </div>
            <div class="flex justify-center">
                <Organizer name="Mohammad Haris" affiliation="MBZUAI"
                           image={mohamadAvatar}
                           url="https://m-haris-khan.com/"
                           className="p-2"
                />
                <Organizer name="Usman Tariq" affiliation="American University of Sharjah"
                           image={usmanAvatar}
                           url="https://www.aus.edu/faculty/usman-tariq"
                           className="p-2"
                />
            </div>
        {:else}
            <div class="grid justify-center">
                <Organizer name="Abhinav Dhall" affiliation="Flinders University"
                           image={abhinavAvatar}
                           url="https://sites.google.com/site/dhallabhinav/"
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
                <Organizer name="Mohammad Haris" affiliation="MBZUAI"
                           image={mohamadAvatar}
                           url="https://m-haris-khan.com/"
                           className="p-2"
                />
                <Organizer name="Usman Tariq" affiliation="American University of Sharjah"
                           image={usmanAvatar}
                           url="https://www.aus.edu/faculty/usman-tariq"
                           className="p-2"
                />
            </div>
        {/if}
    </MediaQuery>

    <Divider/>

    <h1 class="text-4xl font-bold text-center">Program Committee (TBD)</h1>
    <br>

    <div class="grid justify-center" id="pc-member-div">
    </div>

    <Divider/>

    <br>
    <h1 class="text-4xl font-bold text-center">Contact</h1>
    <br>

    <p class="text-2xl text-center">
        Email: <a href={"mailto:" + EMAIL} class="link link-info">
        {EMAIL}
    </a>
    </p>
    <br>
</div>

<style>
    @media (max-width: 640px) {
        #pc-member-div {
            @apply grid-cols-2;
        }
    }

    @media (min-width: 640px) and (max-width: 960px) {
        #pc-member-div {
            @apply grid-cols-4;
        }
    }

    @media (min-width: 960px) {
        #pc-member-div {
            @apply grid-flow-col;
        }
    }
</style>
