/* eslint-env mocha */

import { getDotenv } from '@karmaniverous/get-dotenv';

before(async function () {
  if (!process.env.ENV)
    await getDotenv({
      loadProcess: true,
    });
});
