#!/usr/bin/env node

import dotenv from 'dotenv';
dotenv.config();

import foo from './foo.mjs';

import { program } from 'commander';

program.option('-b, --bar <string>', 'What to say?');
program.option('-v, --version', 'Version');

program.parse();

const { bar, version } = program.opts();

if (version) console.log(process.env.NODE_PACKAGE_VERSION);
else console.log(`foo ${foo(bar)}!`);
