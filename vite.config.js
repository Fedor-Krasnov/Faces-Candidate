import { defineConfig } from 'vite';
import crypto from 'crypto';

export default defineConfig({
  css: {
    modules: {
      localsConvention: 'camelCase',
      generateScopedName: (name, filename, css) => {
        const hash = crypto.createHash('md5').update(css).digest('base64').substring(0, 5);

        return `${name}__${hash}`;
      },
    },
  },
});
