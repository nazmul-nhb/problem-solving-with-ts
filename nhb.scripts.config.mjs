// @ts-check

import { defineScriptConfig } from 'nhb-scripts';

export default defineScriptConfig({
    format: {
        args: ['--write'],
        files: ['.'],
        ignorePath: '.prettierignore',
    },
    build: { commands: [{ cmd: 'tsc' }] },
    commit: {
        runFormatter: false,
    },
    count: {
        defaultPath: '.',
        excludePaths: ['node_modules', 'dist', 'build']
    },
});
