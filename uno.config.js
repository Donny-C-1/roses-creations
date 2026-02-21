import { defineConfig, presetIcons } from 'unocss';

export default defineConfig({
	presets: [
		presetIcons({
			prefix: 'i-',
			extraProperties: {
				display: 'inline-block',
				'vertical-align': 'middle'
			}
		})
	]
});
