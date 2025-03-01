import { derived } from "svelte/store";
import { page } from '$app/stores';

export const currentVersion = derived(
    page,
    $page => $page.url.pathname.startsWith('/2024') ? '2024' : '2025'
);
