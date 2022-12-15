#!/usr/bin/env node

import { program } from 'commander';

program.requiredOption('-b, --bar <string>', 'What to say?');

program.parse();

const { bar } = program.opts();

console.log(`foo ${bar}!`);
