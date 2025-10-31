import { redirect } from '@sveltejs/kit';
import type { LayoutLoad } from './$types';

export const prerender = true;

export const load: LayoutLoad = async ({ url }) => {
    const pathname = url.pathname;
    
    // Don't redirect if already in versioned routes
    if (pathname.startsWith('/2024/') || pathname.startsWith('/2025/')) {
        return {};
    }

    // Root path redirects to latest version (2025)
    if (pathname === '/') {
        throw redirect(307, '/2025');
    }

    // Legacy paths redirect to 2024 version
    const legacyPaths = [
        '/program',
        '/registration',
        '/details',
        '/evaluation',
        '/cfp',
        '/dates',
        '/organization'
    ];

    if (legacyPaths.includes(pathname)) {
        throw redirect(307, `/2024${pathname}`);
    }

    return {};
};
