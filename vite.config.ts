import { setDefaultResultOrder } from 'node:dns'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

setDefaultResultOrder('verbatim')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
})
