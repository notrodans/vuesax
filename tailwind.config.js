const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	future: {
		hoverOnlyWhenSupported: true
	},
	darkMode: "class",
	theme: {
		extend: {
			fontFamily: {
				sans: ["var(--primary-font)"]
			},
			colors: {
				gray: colors.zinc,
				"gray-1000": "rgb(17,17,19)",
				"gray-1100": "rgb(10,10,11)",
				vuesax: {
					white: "#FFFFFF",
					pink: "#FF0080",
					darkBlue: "#0F1642",
					cyan: "#50E3C2",
					orange: "#FFA84C",
					violet: "#7928CA",
					primary: "#7E72F2",
					bluewood: "#2B3253"
				}
			},
			backgroundImage: ({ theme }) => ({
				"vc-border-gradient": `radial-gradient(at left top, ${theme(
					"colors.gray.500"
				)}, 50px, ${theme("colors.gray.800")} 50%)`
			}),
			keyframes: ({ theme }) => ({
				rerender: {
					"0%": {
						["border-color"]: theme("colors.vercel.pink")
					},
					"40%": {
						["border-color"]: theme("colors.vercel.pink")
					}
				},
				highlight: {
					"0%": {
						background: theme("colors.vercel.pink"),
						color: theme("colors.white")
					},
					"40%": {
						background: theme("colors.vercel.pink"),
						color: theme("colors.white")
					}
				},
				loading: {
					"0%": {
						opacity: ".2"
					},
					"20%": {
						opacity: "1",
						transform: "translateX(1px)"
					},
					to: {
						opacity: ".2"
					}
				},
				shimmer: {
					"100%": {
						transform: "translateX(100%)"
					}
				},
				translateXReset: {
					"100%": {
						transform: "translateX(0)"
					}
				},
				fadeToTransparent: {
					"0%": {
						opacity: 1
					},
					"40%": {
						opacity: 1
					},
					"100%": {
						opacity: 0
					}
				}
			})
		}
	},
	plugins: [
		require("@tailwindcss/typography"),
		require("@tailwindcss/forms"),
		require("@tailwindcss/line-clamp")
	]
};
