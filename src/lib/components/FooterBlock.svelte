<script lang="ts">
    import { EMAIL } from "$lib/consts";
    import { page } from '$app/stores';
    import { currentVersion } from "$lib/store/version";

    $: venue = '';

    $: if ($currentVersion === '2024') {
        venue = 'ACM Multimedia 2024';
    } else {
        venue = 'ACM Multimedia 2025';
    }
</script>

<footer class="footer footer-center p-4 bg-base-200 text-base-content bottom-0 fixed h-12"
        class:details-footer={($page.url.pathname === '/details' || $page.url.pathname === '/2025/organization')}
        class:other-footer={($page.url.pathname !== '/details' && $page.url.pathname !== '/2025/organization')}
>
    <div class="flex w-full">
        <div class="w-1"/>
        <p class="h-5">1M-Deepfakes Detection Challenge - {venue}</p>
        <div class="w-1"/>
        <a href="https://github.com/ControlNet/AV-Deepfake1M" class="h-5 link link-info">GitHub</a>
        <div class="w-1"/>
        <a href="https://huggingface.co/collections/ControlNet/av-deepfake1m-67f53b6adb888f8018bf0117" class="h-5 link link-info">Hugging Face</a>
        <div class="grow"/>
        <p class="h-5"><a href="mailto:Deepfakes1m@gmail.com" class="link link-info font-bold">{EMAIL}</a></p>
        <div class="w-1"/>
    </div>
</footer>

<style>

    @media (max-width: 800px) {
        footer {
            @apply invisible;
        }

        :global(div.footer-pad) {

        }
    }

    /*@media (min-width: 800px) and (min-height: 870px)  {*/
    /*    footer.org-footer {*/
    /*        @apply absolute;*/
    /*    }*/
    /*}*/

    /*footer.other-footer {*/
    /*    @apply absolute;*/
    /*}*/

</style>
