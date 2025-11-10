import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const trailingSlash = 'always';

export const load: PageLoad = () => {
	throw redirect(307, '/2024/about');
};