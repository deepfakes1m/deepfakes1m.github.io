<script lang="ts">
    export let name: string;
    export let affiliation: string;
    export let className: string;
</script>


<div class="flex {className}">
    <div class="ml-4 flex flex-col">
        <div class="flex-1"/>
        <div class="shrink text-center">
            <h3 class="text-lg font-bold">{name}</h3>
            <p class="text-sm">{affiliation}</p>
        </div>
        <div class="flex-1"/>
    </div>
</div>
