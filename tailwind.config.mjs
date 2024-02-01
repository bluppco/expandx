/** @type {import('tailwindcss').Config} */

module.exports = {

	darkMode: ["class"],

	content: [

		'./pages/**/*.{js,jsx}',
		'./components/**/*.{js,jsx}',
		'./app/**/*.{js,jsx}',
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',

	],

	prefix: "",

	theme: {

		container: {

			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},

		},

		extend: {

			screens: {

				"mac": "1440px"

			},

			colors: {

				"ex_light_blue": "#62a3c1",
				"ex_dark_blue": "#1574c1bd",
				"ex_royal_blue": "#002584",
				"ex_sky_blue": "#5d94c1",
				"ex_blue": "#0c71c3",
				"ex_baby_blue": "#0da0c5",
				"ex_ocean_blue": "#2ea3f2",
				"ex_red": "#d60b4c",

			},

			fontFamily: {

				"open_sans": [ "Open Sans", "sans-serif" ]

			},

			keyframes: {

				"accordion-down": {

					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },

				},
				"accordion-up": {

					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },

				},

			},
			animation: {

				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",

			},
		},
	},
	plugins: [require("tailwindcss-animate")],
}
