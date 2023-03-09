const colors = require("tailwindcss/colors");

const pxToRem = px => {
	return `${px / 16}rem`;
};

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	future: {
		hoverOnlyWhenSupported: true
	},
	darkMode: "class",
	theme: {
		screens: {
			sm: "47.99875em",
			md: "61.99875em",
			lg: "80em",
			xl: "90em",
			"2xl": "98.1250em"
		},
		container: {
			padding: "0.9375rem",
			center: true,
			screens: {
				sm: "61.99875em",
				md: "64em",
				lg: "80em",
				xl: "90em",
				"2xl": "98.1250em"
			}
		},
		extend: {
			height: "none",
			fontFamily: {
				sans: ["var(--primary-font)"]
			},
			container: {
				padding: "0.9375rem",
				center: true,
				screens: {
					none: "auto",
					"2xl": "98.1250em"
				}
			},
			colors: {
				vuesax: {
					white: "#FFFFFF",
					pink: "#FF0080",
					darkBlue: "#0F1642",
					cyan: "#50E3C2",
					orange: "#FFA84C",
					violet: "#7928CA",
					purple: "#6F64F8",
					primary: "#7E72F2",
					gray: "#B8C2CC",
					wood: "#2C2C20",
					bluewood: "#2B3253"
				}
			},
			backgroundImage: ({ theme }) => ({
				"vc-border-gradient": `radial-gradient(at left top, ${theme("colors.gray.500")}, ${pxToRem(
					50
				)}, ${theme("colors.gray.800")} 50%)`
			}),
			gridTemplateColumns: {
				categories: `minmax(${pxToRem(200)}, ${pxToRem(370)}) 1fr`
			},
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
