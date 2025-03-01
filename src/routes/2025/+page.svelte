<script>
    import { TITLE } from "$lib/consts";
    import { goto } from "$app/navigation";
    import { tabNum } from "$lib/store/tab-num";
</script>

<svelte:head>
    <title>{TITLE} - ACM Multimedia 2025</title>
    <meta name="description" content={TITLE}/>
</svelte:head>

<div class="flex flex-col min-h-screen">
    <div class="flex-1"/>
    <div class="flex-1"/>
    <div class="hero bg-base-100">
        <div class="hero-content text-center">
            <div class="max-w-4xl">
                <h1 class="text-5xl font-bold">{TITLE}</h1>
                <p class="text-xl py-6"><a href="https://2025.acmmm.org/" class="link link-info">ACM Multimedia 2025</a> - Coming Soon</p>

                <div class="card w-full bg-base-200/50 shadow-xl m-5">
                    <div class="card-body text-center">
                        <h2 class="text-2xl font-bold mb-4">Welcome to the 2025 1M-Deepfakes Detection Challenge!</h2>
                        <p class="mb-4">We are currently preparing the challenge details for ACM Multimedia 2025.</p>
                    </div>
                </div>

                <button class="btn btn-primary w-64 disabled" disabled>
                    Registration Coming Soon
                </button>
            </div>
        </div>
    </div>
    <div class="flex-1"/>
    <div class="h-12 footer-pad"/>
</div>
