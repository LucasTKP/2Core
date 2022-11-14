
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#0D0D0D',
				secondary: '#0D6EA7',
				terciary: '#73AFCB',
				lightBlue: '#A0CED9'
			},
			container: {
				padding: '2rem',
				center: true
			},
			dropShadow: {
				'line': '0 5px 10px rgba(255, 255, 255, 0.95)',
			},
		},
		screens:{
			'ls' : '420px',
			'sm' : '640px',
			'md' : '768px',
			'lg' : '1024px',
			'xl' : '1280px',
			'2lg' : '1400px',
			'2xl': '1536px'
		},
		fontFamily: {
			'Inter': ['Inter'],
			'Jost': ['Jost']
		  },
	},

	plugins: [],
}
