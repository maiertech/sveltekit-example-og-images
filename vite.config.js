import { sveltekit } from '@sveltejs/kit/vite';
import fs from 'fs';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [rawFonts(['.ttf']), sveltekit()]
};

/**
 * Custom plugin: import font as buffer.
 * @param {string[]} ext
 */
function rawFonts(ext) {
	return {
		name: 'vite-plugin-raw-fonts',
		/** @param {string} id */
		transform(code, id) {
			// Check if file ends with an extension from extension array.
			if (ext.some((e) => id.endsWith(e))) {
				const buffer = fs.readFileSync(id);
				return { code: `export default ${JSON.stringify(buffer)}`, map: null };
			}
		}
	};
}

export default config;
