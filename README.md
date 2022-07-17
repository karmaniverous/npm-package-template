# NPM Package Template

An ES6 NPM package project template featuring mocha/chai test support.

If you want to create a React component in an NPM package, use
[this template](https://github.com/karmaniverous/template-npm-react-component)
instead!

## `release-it` Configuration

This template includes [release-it](https://github.com/release-it/release-it)
support that requires these final configurations:

1. Create a copy of `.env.development.local.template` and name it
   `.env.development.local`

1. Create a GitHub
   [personal access token](https://github.com/settings/tokens/new?scopes=repo&description=release-it)
   and add it as the value of `GITHUB_TOKEN` in `.env.development.local`.

1. In `package.json`, set `release-it.npm.publish` to `true`.

You can now build your project and publish a release to GitHub and NPM with
these commands:

```
npm run build
npm run release
```

## Integrating Template Updates

Follow
[these instructions](https://karmanivero.us/blog/installing-github-repo-template-updates/)
