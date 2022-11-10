
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#013453',
				secondary: '#0D6EA7',
				terciary: '#73AFCB',
				lightBlue: '#1BC7E2'
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
			// eslint-disable-next-line no-undef
			...defaultTheme.screens,
		},
		fontFamily: {
			'Inter': ['Inter'],
			'Jost': ['Jost']
		  },
	},

	plugins: [],
}
