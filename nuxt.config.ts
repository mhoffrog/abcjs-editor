// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ["@pinia/nuxt", "@nuxtjs/google-fonts", "@nuxt/eslint"],
	devtools: { enabled: true },
	css: ["abcjs/abcjs-audio.css", '@webcoder49/code-input/code-input.css', 'highlightjs-abc/abcjs-light-theme.css'],
	compatibilityDate: "2024-11-01",
	eslint: {
		checker: true,
	},
	googleFonts: {
		families: {
			"Roboto": [300, 400, 500, 700],
			"Kreon": true,
			"Itim": true,
			"Fira+Mono": true,
		},
	},
	typescript: {
		tsConfig: {
			compilerOptions: {
				//noUncheckedIndexedAccess: false
			}
		}
	},
	vue: {
		compilerOptions: {
			isCustomElement: (tag) => tag === "code-input",
		},
	},
});
