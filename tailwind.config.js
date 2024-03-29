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
	theme: {
		extend: {
			screens: {
				sm: pxToRem(767.98),
				md: pxToRem(991.98),
				lg: pxToRem(1280),
				xl: pxToRem(1440),
				"2xl": pxToRem(1570)
			},
			container: {
				padding: pxToRem(15),
				center: true,
				screens: {
					sm: pxToRem(767.98),
					md: pxToRem(991.98),
					lg: pxToRem(1280),
					xl: pxToRem(1440),
					"2xl": pxToRem(1570)
				}
			},
			fontFamily: {
				sans: ["var(--primary-font)"]
			},
			colors: {
				vuesax: {
					white: "#FFFFFF",
					black: "#2F2F2F",
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
	plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")]
};
