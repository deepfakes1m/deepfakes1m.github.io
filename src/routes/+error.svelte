<script>
import { tabNum } from "$lib/store/tab-num";
import { onMount } from "svelte";

onMount(() => {
    tabNum.set(undefined)
})
</script>

<div class="hero min-h-screen bg-base-100">
    <div class="hero-content text-center">
        <div class="max-w-4xl">
            <h1 class="text-5xl font-bold">404 Not Found</h1>
        </div>
    </div>
</div>