import { defineConfig } from 'wxt';

// See https://wxt.dev/api/config.html
export default defineConfig({
  modules: ['@wxt-dev/module-react'],
  manifest: {
    commands: {
      'toggle-recording': {
        suggested_key: {
          default: 'Ctrl+Shift+Space',
        },
        description: 'Start/stop voice dictation',
      },
    },
  },
});
