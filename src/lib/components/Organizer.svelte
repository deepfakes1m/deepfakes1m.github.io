<script lang="ts">
    export let name: string;
    export let affiliation: string;
    export let url: string;
    export let image: string;
    export let className: string;
</script>


<div class="flex {className}">
    <div class="avatar">
        <div class="w-24 rounded-full">
            <img src={image} alt=""/>
        </div>
    </div>
    <div class="ml-4 flex flex-col">
        <div class="flex-1"/>
        <div class="shrink">
            <h3 class="text-lg font-bold">
                <a href={url} class="link link-primary">
                    {name}
                </a>
            </h3>
            <p class="text-sm">{affiliation}</p>
        </div>
        <div class="flex-1"/>
    </div>
</div>
