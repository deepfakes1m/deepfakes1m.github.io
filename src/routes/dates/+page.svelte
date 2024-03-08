<script>
    import { TITLE } from "$lib/consts";
    import TickIcon from "$lib/components/TickIcon.svelte";

    const items = [
        {name: "Train and validation set release", date: "March 7, 2024"},
        {name: "Test set release", date: "TBD"},
        {name: "Paper Submission Deadline", date: "June 14, 2024"},
        {name: "Final Decision", date: "July 15, 2024"},
        {name: "Camera Ready Deadline", date: "July 29, 2024"},
    ]

    const currentIndex = 1;
</script>

<svelte:head>
    <title>Important Dates</title>
    <meta name="description" content="Import dates of {TITLE}"/>
</svelte:head>


<div class="hero min-h-screen bg-base-100">
    <div class="hero-content text-center flex-wrap">
    <h1 class="text-4xl font-bold text-center">Important Dates</h1>
        <ul class="timeline timeline-vertical">
            {#each items as item, index}
                {#if index < currentIndex}
                    <li>
                        {#if index > 0}
                            <hr class="bg-primary"/>
                        {/if}
                        <div class="timeline-start timeline-box">{item.date}</div>
                        <div class="timeline-middle">
                            <TickIcon class_name="w-5 h-5 text-primary"/>
                        </div>
                        <div class="timeline-end timeline-box">{item.name}</div>
                        {#if index < items.length - 1}
                            <hr class="bg-primary"/>
                        {/if}
                    </li>
                {:else if index >= currentIndex}
                    <li>
                        {#if index === currentIndex && index > 0}
                            <hr class="bg-primary"/>
                        {:else if index > 0}
                            <hr/>
                        {/if}
                        <div class="timeline-start timeline-box">{item.date}</div>
                        <div class="timeline-middle">
                            <TickIcon class_name="w-5 h-5"/>
                        </div>
                        <div class="timeline-end timeline-box">{item.name}</div>
                        {#if index < items.length - 1}
                            <hr />
                        {/if}
                    </li>
                {/if}
            {/each}
        </ul>
    </div>
</div>

