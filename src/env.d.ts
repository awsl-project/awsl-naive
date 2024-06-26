/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'

  const component: DefineComponent<
    Record<string, any>,
    Record<string, any>,
    any
  >
  export default component
}

interface ImportMetaEnv {
  readonly VITE_API_HOSTNAME: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
