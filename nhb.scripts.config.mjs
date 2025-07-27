// @ts-check

import { defineScriptConfig } from 'nhb-scripts';

export default defineScriptConfig({
    build: { commands: [{ cmd: 'tsc' }] },
    commit: {
        runFormatter: false,
    },
    count: {
        defaultPath: 'src',
        excludePaths: ['node_modules', 'dist']
    },
});
