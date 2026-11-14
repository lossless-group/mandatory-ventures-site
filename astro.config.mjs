// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import path from 'node:path';

// Mandatory Ventures — three design directions spiked against one content
// spine. `/` is the internal chooser until a direction is promoted.
export default defineConfig({
  site: 'https://mandatory.ventures',
  trailingSlash: 'ignore',
  devToolbar: { enabled: false },
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@layouts': path.resolve('./src/layouts'),
        '@components': path.resolve('./src/components'),
        '@lib': path.resolve('./src/lib'),
      },
    },
  },
});
