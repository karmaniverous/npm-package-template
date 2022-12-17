#!/usr/bin/env node

// Load environment variables.
import dotenv from 'dotenv';
dotenv.config();

// Import package exports.
import { foo } from '../export/index.mjs';

// Create CLI.
import { program } from 'commander';

// Define CLI options.
program.option('-b, --bar <string>', 'What to say?');
program.option('-v, --version', 'Version');

// Parse CLI options from command line.
program.parse();
const { bar, version } = program.opts();

// Execute CLI logic.
if (version) console.log(process.env.NODE_PACKAGE_VERSION);
else console.log(`foo ${foo(bar)}!`);
