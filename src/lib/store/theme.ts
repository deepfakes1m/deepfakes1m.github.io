import { type Writable, writable } from "svelte/store";
export const dataTheme: Writable<string | null> = writable(null);
dataTheme.subscribe((value) => {
    if (value === null) {
        return;
    }
    document.documentElement.setAttribute("data-theme", value!);
    localStorage.setItem("theme", value!);
})
