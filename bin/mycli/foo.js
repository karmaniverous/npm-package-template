// npm imports
import { dotenvExpand } from '@karmaniverous/get-dotenv';
import { Command } from 'commander';

// Import package exports.
import { foo } from '@karmaniverous/npm-package-template';

export default new Command()
  .name('foo')
  .description('Foos your bar.')
  .enablePositionalOptions()
  .passThroughOptions()
  .option('-b, --bar <string>', 'foo what?', '$FOO_DEFAULT')
  .action(async ({ bar }, command) => {
    const { logger = console } = command.parent?.parent?.getdotenvOptions ?? {};

    // Expand argument.
    bar = dotenvExpand(bar);

    // Execute CLI logic.
    logger.info(`foo ${foo(bar)}!`);
  });
