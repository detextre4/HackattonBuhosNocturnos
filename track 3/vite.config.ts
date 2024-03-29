// Plugins
import vue from '@vitejs/plugin-vue'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

// Utilities
import { defineConfig, loadEnv } from 'vite'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig((userConfig) => {
  const env = loadEnv(userConfig.mode, process.cwd(), '')
  // isProduction = process.env.NODE_ENV === 'production',

  return {
    base: env.VITE_BASE_URL,
    plugins: [
      vue({ 
        template: { transformAssetUrls }
      }),
      // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
      vuetify({
        autoImport: true,
        styles: { configFile: 'src/assets/styles/settings.scss' }
      }),
    ],
    define: {
      'process.env': {
        SECURE_STORAGE_NAME_SPACE: env.VITE_SECURE_STORAGE_NAME_SPACE,
      },
      __VUE_I18N_FULL_INSTALL__: true,
      __VUE_I18N_LEGACY_API__: false,
      __INTLIFY_PROD_DEVTOOLS__: false,
    },
    optimizeDeps: {
      exclude: ['js-big-decimal']
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      },
      extensions: [
        '.js',
        '.json',
        '.jsx',
        '.mjs',
        '.ts',
        '.tsx',
        '.vue',
      ],
    },
    server: {
      port: 3000,
      host: true,
    },
  }
})
