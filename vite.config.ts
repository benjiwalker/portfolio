import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

const config: UserConfig = {
	build: {
		target: 'es2015'
	},
	plugins: [sveltekit()]
};

export default config;
