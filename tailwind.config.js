/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'bayanat-blue': '#002cc4'
			},
			backgroundImage: {
				hero: 'url("./Hero.jpg")'
			}
		}
	},
	plugins: []
};
