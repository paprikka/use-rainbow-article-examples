/// <reference types="node" />

import { defineConfig } from 'vite'
import { resolve } from 'path'
import preact from '@preact/preset-vite'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [preact({ devtoolsInProd: true })],

    build: {
        lib: {
            entry: resolve(__dirname, 'src/lib.tsx'),
            name: 'Examples',
            fileName: (format) => `examples.${format}.js`,
        },
        minify: false,
        rollupOptions: {
            // make sure to externalize deps that shouldn't be bundled
            // into your library
            external: ['preact'],
            output: {
                // Provide global variables to use in the UMD build
                // for externalized deps
                globals: {
                    preact: 'preact',
                },
            },
        },
    },
})
