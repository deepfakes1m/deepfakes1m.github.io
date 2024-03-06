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
	  { name: 'About', path: '/', id: 0, enabled: true },
	  { name: 'Registration', path: '/registration', id: 1, enabled: true },
	  { name: 'Evaluation', path: '/evaluation', id: 2, enabled: false },
	  { name: 'Details', path: '/details', id: 3, enabled: false },
	  { name: 'Important Dates', path: '/dates', id: 4, enabled: true },
	  { name: 'Organization', path: '/organization', id: 5, enabled: true }
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
