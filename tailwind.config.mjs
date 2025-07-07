/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode : 'class',
	theme: {
		extend: {
		colors: {
        duron: "#63e", // para acentos violetas
        base: "#000000", // fondo base
        light: "#ffffff",
        muted: "#aaaaaa",
      },
      backgroundImage: {
        hero: "radial-gradient(125% 125% at 50% 10%, #000 40%, #63e 100%)",
      },
    },
  },
	plugins: [],
}
