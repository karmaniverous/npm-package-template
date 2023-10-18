#!/usr/bin/env node

// npm imports
import { getDotenvCli } from '@karmaniverous/get-dotenv';
import fs from 'fs-extra';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

// lib imports
import foo from './foo.js';

// Load default options.
const __dirname = dirname(fileURLToPath(import.meta.url));
const cliDefaultOptionsCustomPath = resolve(
  __dirname,
  '../../getdotenv.config.json'
);

const cliDefaultOptionsCustom = (await fs.exists(cliDefaultOptionsCustomPath))
  ? JSON.parse(await fs.readFile(cliDefaultOptionsCustomPath))
  : {};

const cli = getDotenvCli({
  ...cliDefaultOptionsCustom,
}).addCommand(foo);

await cli.parseAsync();
