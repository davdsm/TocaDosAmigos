import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		host: true, // Allows access from external network (i.e., your host machine)
		port: 5173 // Optional: specifies the port, defaults to 5173
	}
});
