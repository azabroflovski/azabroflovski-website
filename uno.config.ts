import {
  defineConfig,
  presetIcons,
  presetTypography,
  presetUno,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    // ...
  ],
  theme: {
    colors: {
      // ...
    },
  },
  presets: [
    presetUno(),
    presetIcons(),
    presetTypography(),
  ],
})
