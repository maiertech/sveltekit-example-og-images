import { componentToPng } from '$lib/renderImage';
import Image from '$lib/templates/hello-og-image.svelte';

/** @type {import('./$types').RequestHandler} */
export const GET = async () => {
	return componentToPng(Image, {}, 1200, 600);
};
