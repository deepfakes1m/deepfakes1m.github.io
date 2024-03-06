<script lang="ts">
    import "../app.css";
    import FooterBlock from "$lib/components/FooterBlock.svelte";
	import Navbar from "$lib/components/Navbar.svelte";
	import { themeChange } from "theme-change";
	import { onMount } from "svelte";

	onMount(() => {
		themeChange(false)
	})

	const items = [
	  { name: 'Home', path: '/', id: 0 },
	  { name: 'Participate', path: '/participate', id: 1 },
	  { name: 'Important Dates', path: '/dates', id: 2 },
	  { name: 'Organization', path: '/organization', id: 3 }
	]
</script>

<style>
    :global(button.btn) {
        @apply rounded-3xl h-full;
    }

    :global(input.input) {
        @apply rounded-3xl;
    }

    :global(textarea.textarea) {
        @apply rounded-3xl;
    }

	body {
		@apply overflow-y-scroll;
	}
</style>

<Navbar items={items}/>

<slot/>

<FooterBlock/>
