<script>
    import { EMAIL, TITLE } from "$lib/consts";
</script>

<svelte:head>
    <title>Participation in {TITLE}</title>
    <meta name="description" content="About this app"/>
</svelte:head>

<div class="">

    <div class="h-36 w-full"/>
    <!--	Title-->
    <div>
        <h1 class="text-4xl font-bold text-center">Challenge Registration</h1>
    </div>
    <br>
    <p class="text-center">
        For participating in the challenge, the first step is to register your team. Please complete the
        <a href="https://forms.office.com/r/yiqPZSQ1Ur">form</a> with the required information.
    </p>

    <p class="text-center">
        The second stage is the EULA agreement. Please download the
        <a href="https://curtin-my.sharepoint.com/%F0%9F%85%B1%EF%B8%8F/g/personal/291942d_curtin_edu_au/EZMWi2Z9Ym5Fk6BC1kSJk5sBGPvug_-yvOBv7dY-rFvjvg?e=bx6ijE">EULA Form</a>
        and sign it at your end. Please email the signed EULA to <a href={"mailto:" + EMAIL}>{EMAIL}</a>.
    </p>

</div>

<style>
    a {
        @apply text-info underline;
    }
</style>