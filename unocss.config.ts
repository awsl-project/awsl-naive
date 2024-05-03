// uno.config.ts
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetMini,
  presetUno,
} from 'unocss'

export default defineConfig({
  presets: [presetUno(), presetAttributify(), presetIcons(), presetMini()],
  rules: [],
})
