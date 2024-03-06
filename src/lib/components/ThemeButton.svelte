<script lang="ts">
    import { faMoon } from "@fortawesome/free-solid-svg-icons";
    import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome"
    import { onMount } from "svelte";
    import { dataTheme } from "$lib/store/theme";

    export let className = "";
    export let style = "";

    function onClick() {
        // the theme is changed after this assignment, so it can make the theme inverse between main theme and button
        dataTheme.set(localStorage.getItem("theme") ?? "dracula")
    }

    onMount(() => {
        dataTheme.set(localStorage.getItem("theme") === "dracula" ? "cupcake" : "dracula")
    })
</script>

<button class="btn btn-square {className}" style={style} data-toggle-theme="dracula,cupcake" data-theme={$dataTheme}
        on:click={onClick}>
    <FontAwesomeIcon icon={faMoon} class="fa-xl"/>
</button>

<style>
    @media (max-width: 600px) {
        button {
            display: none;
        }
    }
</style>
