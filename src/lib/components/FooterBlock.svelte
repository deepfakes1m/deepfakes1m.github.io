<script lang="ts">
import { EMAIL } from "$lib/consts";
</script>

<footer class="footer footer-center p-4 bg-base-200 text-base-content bottom-0 absolute">
    <div class="flex w-full">
        <div class="w-1"/>
        <p class="h-5">1M-Deepfakes Detection Challenge - ACM Multimedia 2024</p>
        <div class="grow"/>
        <p class="h-5"><a href="mailto:Deepfakes1m@gmail.com" class="link link-info font-bold">{EMAIL}</a></p>
        <div class="w-1"/>
    </div>
</footer>

<style>
    @media (max-width: 1080px) {
        .footer-center {
            display: none;
        }
    }
</style>