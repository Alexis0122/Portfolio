/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				heading: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
				mono: ['"JetBrains Mono"', 'monospace'],
			},
			colors: {
				duron: '#63e',
				'duron-light': '#8c6eff',
				'duron-dark': '#4a1fa8',
				'glow': 'rgba(102, 51, 238, 0.4)',
				base: '#000000',
				light: '#ffffff',
				muted: '#aaaaaa',
				surface: 'rgba(255, 255, 255, 0.05)',
			},
			backgroundImage: {
				hero: "radial-gradient(125% 125% at 50% 10%, #000 40%, #63e 100%)",
				'hero-alt': "radial-gradient(125% 125% at 50% 10%, #000 30%, #4a1fa8 60%, #63e 100%)",
				'gradient-text': 'linear-gradient(135deg, #63e, #8c6eff, #b794f4)',
				'glow-gradient': 'linear-gradient(135deg, rgba(102,51,238,0.4), rgba(140,110,255,0.1))',
			},
			boxShadow: {
				'glow': '0 0 20px rgba(102, 51, 238, 0.3)',
				'glow-lg': '0 0 40px rgba(102, 51, 238, 0.4)',
				'glow-sm': '0 0 10px rgba(102, 51, 238, 0.2)',
			},
			animation: {
				'float': 'float 6s ease-in-out infinite',
				'float-slow': 'float 8s ease-in-out infinite',
				'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
				'spin-slow': 'spin 8s linear infinite',
				'shine': 'shine 2s linear infinite',
				'typewriter': 'typewriter 2s steps(20) forwards',
				'blink': 'blink 0.7s step-end infinite',
			},
			keyframes: {
				float: {
					'0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
					'50%': { transform: 'translateY(-20px) rotate(3deg)' },
				},
				pulseGlow: {
					'0%, 100%': { boxShadow: '0 0 20px rgba(102, 51, 238, 0.3)' },
					'50%': { boxShadow: '0 0 40px rgba(102, 51, 238, 0.6)' },
				},
				shine: {
					'0%': { backgroundPosition: '-200% center' },
					'100%': { backgroundPosition: '200% center' },
				},
				typewriter: {
					'from': { width: '0' },
					'to': { width: '100%' },
				},
				blink: {
					'0%, 100%': { opacity: 1 },
					'50%': { opacity: 0 },
				},
			},
		},
	},
	plugins: [],
}
