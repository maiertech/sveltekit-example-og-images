import sourceSansPro from '$lib/fonts/SourceSansPro-Regular.ttf?base64';
import { Resvg } from '@resvg/resvg-js';
import satori from 'satori';
import { html as toReactNode } from 'satori-html';

/**
 * @param {typeof import('svelte').SvelteComponent} component
 * @param {Record<string, unknown>} props
 * @param {number} width
 * @param {number} height
 */
export async function componentToPng(component, props, width, height) {
	// Server-side render Svelte component.
	const result = /** @type {any} */ (component).render(props);
	// Convert rendered component to VNode/ReactNode.
	const markup = /** @type {React.ReactNode} */ (toReactNode(result.html));

	// Convert ReactNode to SVG string.
	const svg = await satori(markup, {
		fonts: [
			{
				name: 'Source Sans Pro',
				data: Buffer.from(sourceSansPro, 'base64'),
				weight: 400,
				style: 'normal'
			}
		],
		width,
		height
	});

	// Render SVG string.
	const resvg = new Resvg(svg, {
		fitTo: {
			mode: 'original'
		}
	});

	const pngData = resvg.render();

	return new Response(pngData.asPng(), {
		headers: {
			'content-type': 'image/png',
			'cache-control': 'public, max-age=3600, immutable'
		}
	});
}
