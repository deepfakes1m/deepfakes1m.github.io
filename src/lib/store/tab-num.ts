import { type Writable, writable } from "svelte/store";

export const tabNum: Writable<number | undefined> = writable(undefined);