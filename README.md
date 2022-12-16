# NPM Package Template

You wrote a sweet piece of code! Releasing it on [NPM](https://www.npmjs.com/)
seems like the obvious next step. Right?

Try it. Not as easy to do from scratch as you might think.

So here's a plug-and-play NPM package template that offers the following
features:

- Support for the latest ES6 goodies with
  [`eslint`](https://www.npmjs.com/package/eslint) _uber alles_.
- A command line interface for your widget with
  [`commander`](https://www.npmjs.com/package/commander).
- Automated [`lodash`](https://www.npmjs.com/package/lodash) cherry-picking with
  [`babel-plugin-lodash`](https://www.npmjs.com/package/babel-plugin-lodash).
- [`mocha`](https://www.npmjs.com/package/mocha) &
  [`chai`](https://www.npmjs.com/package/chai) for testing, with examples, and a
  sweet testing console.
- Secure environment-variable access to [`package.json`](./package.json) data.
- Code formatting at every save & paste with
  [`prettier`](https://www.npmjs.com/package/prettier).
- One-button release to GitHub & publish to NPM with
  [`release-it`](https://www.npmjs.com/package/release-it).

If you want to create a React component in an NPM package, use my
[React Component NPM Package Template](https://github.com/karmaniverous/react-component-npm-package-template)
instead!

# Setting Up Your Dev Environment

**Use [VS Code](https://code.visualstudio.com/) as your code editor!** Not an
absolute requirement, but you'll be glad you did.

1. [Click here](https://github.com/karmaniverous/npm-package-template/generate)
   to generate a new repository from this template.

1. Clone the new repository to your local machine.

1. VS Code will ask to install a bunch of recommended extensions. Accept all of
   them.

1. Install dependencies by running `npm install`.

1. Build your package and link it locally by running:

   ```bash
   npm run build
   npm link
   ```

1. Assuming you haven't changed the package name in
   [`package.json`](./package.json), check your package version by running its
   CLI.

   ```bash
   npm-package-template -v

   # Output looks like...
   # 0.2.0
   ```

## Create Local Environment Variable File

Look for these [`.env.local.template`](./.env.local.template) in your project
directory. Copy this file and remove the `.template` extension from the copy.

**Do not simply rename this file!** Anybody who pulls your repo will need this
template to create the same file in his own local environment.

## Connect to GitHub

This template supports automated release management with
[`release-it`](https://github.com/release-it/release-it).

If you use GitHub, create a
[Personal Access Token](https://github.com/settings/tokens/new?scopes=repo&description=release-it)
and add it as the value of `GITHUB_TOKEN` in `.env.local`.

If you use GitLab, follow
[these instructions](https://github.com/release-it/release-it#gitlab-releases)
and place your token in the same file.

For other release control systems, consult the
[`release-it` README](https://github.com/release-it/release-it#readme).

You can now create a release at GitHub and optionally publish it to NPM with
this command:

```
npm run release
```

# Common Tasks

## Develop Package Exports

`TODO`

## Develop Package CLI

`TODO`

## Create & Run Unit Tests

`TODO`

## Pass `package.json` Data Into Environment Variables

`TODO`

## Create & Publish a Release

`TODO`

## Integrate a Template Update

Follow
[these instructions](https://karmanivero.us/blog/installing-github-repo-template-updates/).
